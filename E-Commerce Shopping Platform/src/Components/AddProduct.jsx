import React, { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: ""
  });

  function handleChange(e) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/products", {
        ...product,
        price: parseFloat(product.price)
      });

      alert("Product Added Successfully!");

      setProduct({
        title: "",
        price: "",
        description: "",
        category: "",
        image: ""
      });

    } catch (err) {
      console.log(err);
      alert("Error Adding Product!");
    }
  }

  return (
    <div className="mt-[120px] max-w-lg mx-auto shadow-xl p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={product.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border p-2 mb-4"
          required
        />

        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border p-2 mb-4"
          required
        />

        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border p-2 mb-4"
          required
        />

        <input
          name="category"
          value={product.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full border p-2 mb-4"
          required
        />

        <input
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border p-2 mb-4"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-800"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
