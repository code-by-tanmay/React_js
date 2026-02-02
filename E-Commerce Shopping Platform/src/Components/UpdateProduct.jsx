import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateProduct = () => {
  const [id, setId] = useState("");
  const [originalProduct, setOriginalProduct] = useState(null);
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: ""
  });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (originalProduct) {
      setForm({
        title: originalProduct.title ?? "",
        price: originalProduct.price ?? "",
        description: originalProduct.description ?? "",
        category: originalProduct.category ?? "",
        image: originalProduct.image ?? ""
      });
    } else {
      setForm({
        title: "",
        price: "",
        description: "",
        category: "",
        image: ""
      });
    }
  }, [originalProduct]);

  const handleSearch = async () => {
    setMessage("");

    if (!id.trim()) {
      setMessageType("error");
      setMessage("Please enter a product ID.");
      setOriginalProduct(null);
      return;
    }

    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:3000/products/${id}`);
      setOriginalProduct(res.data);
      setMessage("");
      setMessageType("");
    } catch (err) {
      setOriginalProduct(null);
      setMessageType("error");

      if (err.response && err.response.status === 404) {
        setMessage("❌ Product ID does not exist.");
      } else {
        setMessage("❌ Could not fetch product. Check if json-server is running.");
      }
    } finally {
      setLoading(false);
    }
  };

  const buildPatchData = () => {
    if (!originalProduct) return {};

    const patch = {};

    if (form.title !== originalProduct.title) patch.title = form.title;
    if (String(form.price) !== String(originalProduct.price) && form.price !== "") {
      const maybeNumber = Number(form.price);
      patch.price = Number.isNaN(maybeNumber) ? form.price : maybeNumber;
    }
    if (form.description !== originalProduct.description) patch.description = form.description;
    if (form.category !== originalProduct.category) patch.category = form.category;
    if (form.image !== originalProduct.image) patch.image = form.image;

    return patch;
  };

  const handleUpdate = async () => {
    setMessage("");

    if (!originalProduct) {
      setMessageType("error");
      setMessage("Search and load a product first.");
      return;
    }

    const patchData = buildPatchData();
    if (Object.keys(patchData).length === 0) {
      setMessageType("error");
      setMessage("No changes detected. Update at least one field.");
      return;
    }

    setLoading(true);
    try {
      await axios.patch(`http://localhost:3000/products/${id}`, patchData);

      setMessageType("success");
      setMessage("✅ Product updated successfully.");

      const res = await axios.get(`http://localhost:3000/products/${id}`);
      setOriginalProduct(res.data);
    } catch (err) {
      setMessageType("error");
      setMessage("❌ Error updating product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-50 p-6 bg-white shadow-xl rounded-xl border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-indigo-600 text-center">
        🔄 Update Product
      </h2>

      <div className="flex gap-2 mb-4">
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter Product ID"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
        />

        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {message && (
        <div
          className={`p-3 mb-4 rounded-lg text-sm font-semibold ${
            messageType === "error"
              ? "bg-red-100 text-red-700 border border-red-300"
              : "bg-green-100 text-green-700 border border-green-300"
          }`}
        >
          {message}
        </div>
      )}

      {originalProduct ? (
        <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
          <p className="mb-3 font-medium text-gray-600">
            <span className="font-semibold text-gray-800">Product ID:</span> {originalProduct.id}
          </p>

          <label className="font-medium text-gray-700">Title</label>
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full mb-3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <label className="font-medium text-gray-700">Price</label>
          <input
            value={form.price}
            type="number"
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="w-full mb-3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <label className="font-medium text-gray-700">Description</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full mb-3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <label className="font-medium text-gray-700">Category</label>
          <input
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full mb-3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <label className="font-medium text-gray-700">Image URL</label>
          <input
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className="w-full mb-5 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <div className="flex gap-3">
            <button
              onClick={handleUpdate}
              className="flex-1 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
            >
              {loading ? "Updating..." : "Update Product"}
            </button>

            <button
              onClick={() => {
                setOriginalProduct(null);
                setMessage("");
                setMessageType("");
              }}
              className="flex-1 py-2 bg-gray-300 font-semibold rounded-lg hover:bg-gray-400 transition"
            >
              Clear
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-4">
          Search a product by ID to edit.
        </p>
      )}
    </div>
  );
};

export default UpdateProduct;
