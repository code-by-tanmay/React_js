import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Link, useNavigate } from "react-router-dom";

import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Product from "./Components/Product";
import Account from "./Components/Account";
import Contact from "./Components/Contact";
import AddProduct from "./Components/AddProduct";
import DeleteProduct from "./Components/DeleteProduct";
import UpdateProduct from "./Components/UpdateProduct";
import GetSingleProduct from "./Components/GetSingleProduct";

import { CartProvider } from "./Components/CartContext";  
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";


export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const showNavbar = location.pathname !== "/";

  const match = location.pathname.match(/^\/dashboard\/([^/]+)/);
  const usernameFromPath = match ? match[1] : null;
  const storedUsername = localStorage.getItem("username");
  const username = usernameFromPath || storedUsername || null;

  const [searchInput, setSearchInput] = useState("");
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setAllProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleSearch() {
    const text = searchInput.trim().toLowerCase();
    if (!text) return;

    if (text === "home") {
      navigate(username ? `/dashboard/${username}` : "/");
      return;
    }
    if (text === "product" || text === "products") {
      localStorage.removeItem("searchQuery");
      navigate("/product");
      return;
    }
    if (text === "account") {
      navigate("/account");
      return;
    }
    if (text === "contact") {
      navigate("/contact");
      return;
    }

    if (!isNaN(text)) {
      const found = allProducts.find((p) => p.id.toString() === text);
      if (found) {
        localStorage.setItem("searchedProductId", found.id);
        navigate("/GetSingleProduct");
      } else {
        alert("Product ID does not exist!");
      }
      return;
    }

    const matchedProducts = allProducts.filter((p) =>
      p.title.toLowerCase().includes(text)
    );

    if (matchedProducts.length > 0) {
      localStorage.setItem("searchQuery", text);
      navigate("/product");
    } else {
      alert("Product does not exist!");
    }
  }

  return (
    <>
      {showNavbar && (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 border-b bg-gradient-to-br
                 from-indigo-700 via-blue-700 to-purple-700 
                 text-white">

          <Link
            to="/"
            className="text-white text-xl font-bold pl-[100px] hover:underline hover:text-red-600"
          >
            E-commerce
          </Link>

          <div className="hidden sm:flex gap-7 text-white relative left-[670px]">
            <Link to={username ? `/dashboard/${username}` : "/"} className="hover:text-red-600">
              Home
            </Link>
            <Link to="/product" className="hover:text-red-600">
              Product
            </Link>
            <Link to="/account" className="hover:text-red-600">
              Account
            </Link>
            <Link to="/contact" className="hover:text-red-600">
              Contact
            </Link>
          </div>

          {/* Search */}
          <div className="flex items-center gap-4 w-[400px] ml-auto relative mr-[100px]">
            <div className="flex items-center w-full border pl-3 gap-2 bg-white border-gray-300 h-[46px] rounded-md">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="w-full h-full outline-none text-gray-600 placeholder:text-red-700 text-sm placeholder-red-500 placeholder-opacity-50 placeholder:font-bold"
                placeholder="Search product name, ID, page..."
              />
            </div>

            <button
              onClick={handleSearch}
              className="bg-indigo-500 hover:bg-red-600 text-white px-4 py-2 w-32 h-[50px] rounded-md text-sm"
            >
              Search
            </button>
          </div>

          <div>
            <button
              onClick={() => navigate("/")}
              className="
                h-[40px]
                flex items-center gap-2 
                px-4 py-1 
                border border-[#F8A8A8] 
                text-[#F8A8A8]
                bg-[#333333]
              "
            >
              <span>{username}</span>
              <FaUserCircle size={20} className="text-[#F8A8A8]" />
            </button>
          </div>
        </nav>
      )}

      {/* ✅ CartProvider ADDED HERE */}
      <CartProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard/:username" element={<Dashboard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/product" element={<Product />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/GetSingleProduct" element={<GetSingleProduct />} />
          <Route path="/UpdateProduct" element={<UpdateProduct />} />
          <Route path="/DeleteProduct" element={<DeleteProduct />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </CartProvider>
    </>
  );
}
