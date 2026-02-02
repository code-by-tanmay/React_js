import React, { useState } from "react";

export default function DeleteProduct() {
  const [id, setId] = useState("");
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("");

  const fetchProduct = async () => {
    setMessage("");

    if (!id.trim()) {
      setMessage("⚠ Please enter product ID.");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/products/${id}`);

      if (!res.ok) {
        setProduct(null);
        setMessage("❌ Product not found!");
        return;
      }

      const data = await res.json();
      setProduct(data); 
      setMessage("");
    } catch (error) {
      setMessage("❌ Error fetching product!");
    }
  };

  const deleteProduct = async () => {
    try {
      const res = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setMessage("✅ Product deleted successfully!");
        setProduct(null);
        setId("");
      } else {
        setMessage("❌ Failed to delete product!");
      }
    } catch (error) {
      setMessage("❌ Error deleting product!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
        <h1 className="text-3xl font-bold mb-4 text-center text-indigo-600">
          Delete Product
        </h1>

     
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter Product ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button
            onClick={fetchProduct}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl transition"
          >
            Search
          </button>
        </div>

        {/* Message */}
        {message && (
          <p
            className={`mt-4 text-center font-medium ${
              message.includes("❌")
                ? "text-red-600"
                : message.includes("⚠")
                ? "text-yellow-600"
                : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}

        
        {product && (
          <div className="mt-4 bg-gray-50 p-4 rounded-xl shadow-md border">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-xl"
            />

            <h2 className="text-xl font-bold mt-3">{product.title}</h2>
            <p className="text-gray-700 mt-1">
              <span className="font-semibold">Price:</span> ₹{product.price}
            </p>
            <p className="text-gray-700 mt-1">
              <span className="font-semibold">Category:</span> {product.category}
            </p>
            <p className="text-gray-600 mt-2">{product.description}</p>

            <button
              onClick={deleteProduct}
              className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl font-semibold transition"
            >
              Delete Product
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
