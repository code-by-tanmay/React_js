import React, { useEffect, useState } from "react";
import axios from "axios";

function GetSingleProduct() {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState(null);

 
  useEffect(() => {
    const searchedId = localStorage.getItem("searchedProductId");
    if (searchedId) {
      setProductId(searchedId);
      fetchProduct(searchedId);
    }
  }, []);

  const fetchProduct = async (idToFetch = productId) => {
    if (!idToFetch.trim()) {
      alert("Please enter Product ID");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3000/products/${idToFetch}`
      );
      setProduct(response.data);
    } catch (error) {
      console.error("Error:", error);
      setProduct(null);
      alert("Product not found!");
    }
  };

  return (
    <div className="mt-[120px] ml-[600px]">
      <h2 className="text-2xl font-semibold mb-4">Get Single Product</h2>

      <div className="flex items-center gap-3 mb-6 mx-auto">
        <input
          type="text"
          placeholder="Enter Product ID"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          className="border border-gray-400 rounded px-3 py-2 w-48"
        />

        <button
          onClick={() => fetchProduct()}
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          Fetch Product
        </button>
      </div>

      {product && (
        <div className="border border-gray-300 rounded-lg shadow-md p-4 w-80">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-52 object-cover rounded-md mb-4"
          />

          <h3 className="text-lg font-semibold">{product.title}</h3>

          <p className="text-gray-700 mt-1">
            <span className="font-semibold">Price:</span> ₹{product.price}
          </p>

          <p className="text-gray-600 mt-2">{product.description}</p>

          <p className="text-gray-800 mt-2">
            <span className="font-semibold">Category:</span> {product.category}
          </p>
        </div>
      )}
    </div>
  );
}

export default GetSingleProduct;
