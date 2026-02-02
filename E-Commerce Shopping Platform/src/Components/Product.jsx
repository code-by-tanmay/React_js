import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CartContext } from "./CartContext";
import { FaShoppingCart } from "react-icons/fa";

function Product() {
  const { cart, addToCart, increaseQty, decreaseQty, placeOrder, notification } =
    useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!searchInput.trim()) {
      setFilteredProducts(products);
      return;
    }
    const s = searchInput.toLowerCase();
    const match = products.filter((p) =>
      p.title.toLowerCase().includes(s)
    );
    setFilteredProducts(match.length ? match : products);
  }, [searchInput, products]);

  return (
    <div className="mt-[100px] px-6 relative">
      {notification && (
        <div className="fixed top-5 right-0 bg-green-600 text-white px-6 py-3 rounded-l-xl shadow-lg animate-[slideLeft_0.7s_ease]">
          {notification}
        </div>
      )}

      <div className="fixed top-[120px] right-[40px] z-50">
        <button
          onClick={() => setShowCart(true)}
          className="relative bg-blue-600 text-white p-3 rounded-full shadow-lg"
        >
          <FaShoppingCart size={22} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </button>
      </div>

      <h1 className="text-center text-3xl font-bold mb-10">Products</h1>

      <div className="text-center mb-8">
        <Link to="/AddProduct" className="text-blue-800 hover:text-red-600">
          Add Product
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/GetSingleProduct" className="text-blue-800 hover:text-red-600">
          Get Single Product
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/UpdateProduct" className="text-blue-800 hover:text-red-600">
          Update Product
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/DeleteProduct" className="text-blue-800 hover:text-red-600">
          Delete Product
        </Link>
      </div>

      <div className="text-center mb-6">
        <input
          type="text"
          placeholder="Search product..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="border px-3 py-2 rounded-md w-80"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-[50px]">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-5 shadow-lg hover:shadow-2xl flex flex-col"
          >
            <img src={item.image} className="w-full h-[200px] object-contain mb-4" />
            <h2 className="font-bold text-lg">{item.title}</h2>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {item.description}
            </p>
            <p className="font-semibold">Category: {item.category}</p>
            <p className="text-xl font-bold text-green-600 mb-3">₹ {item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="mt-auto bg-indigo-600 text-white py-2 rounded-lg"
            >
              Buy
            </button>
          </div>
        ))}
      </div>

      <div
        className={`fixed top-0 right-0 w-[50%] h-full bg-white shadow-xl transition-transform duration-500 z-50 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 border-b flex justify-between">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button onClick={() => setShowCart(false)}>❌</button>
        </div>

        <div className="p-5 overflow-y-auto h-[70%]">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border p-4 mb-4 rounded-lg flex justify-between"
            >
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p>₹ {item.price}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="bg-gray-300 px-3 py-1 rounded"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="bg-gray-300 px-3 py-1 rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="p-5 border-t">
            <button
              onClick={placeOrder}
              className="w-full bg-green-600 text-white py-3 rounded-lg"
            >
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
