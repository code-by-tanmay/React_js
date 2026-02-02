import React from "react";
import { useParams } from "react-router-dom";

export default function Dashboard() {
  const { username } = useParams();

  return (
    <div className="pt-[120px]">

 
      <section className="w-full  py-20 px-6 text-slate-700 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          Welcome, {username} 👋
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Discover amazing products, exclusive deals and the best shopping experience.
        </p>

        <button className="mt-8 px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full hover:bg-gray-200 transition-all">
          Start Shopping
        </button>
      </section>

      <section className="max-w-7xl mx-auto mt-14 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all border">
          <h2 className="text-xl font-bold mb-2">🔥 Trending Products</h2>
          <p className="text-gray-600 text-sm">
            Explore what's popular among thousands of customers.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all border">
          <h2 className="text-xl font-bold mb-2">⚡ Fast Delivery</h2>
          <p className="text-gray-600 text-sm">
            Get your orders delivered quickly & safely to your doorstep.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all border">
          <h2 className="text-xl font-bold mb-2">💳 Secure Payments</h2>
          <p className="text-gray-600 text-sm">
            100% secure and trusted payment options.
          </p>
        </div>
      </section>

     
      <section className="max-w-7xl mx-auto mt-20 px-6 text-center">
        <h2 className="text-3xl font-bold">Why Shop With Us?</h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We provide best-in-class products with premium quality, unbeatable prices,
          and a seamless shopping experience you’ll love.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow border hover:shadow-xl transition-all">
            <h3 className="font-bold text-lg">⭐ Premium Quality</h3>
            <p className="text-sm text-gray-500 mt-2">
              Only the finest products handpicked for you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border hover:shadow-xl transition-all">
            <h3 className="font-bold text-lg">🎁 Exclusive Offers</h3>
            <p className="text-sm text-gray-500 mt-2">
              Daily discounts & special festival deals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border hover:shadow-xl transition-all">
            <h3 className="font-bold text-lg">📞 24/7 Support</h3>
            <p className="text-sm text-gray-500 mt-2">
              We're here to help anytime, anywhere.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border hover:shadow-xl transition-all">
            <h3 className="font-bold text-lg">🚚 Free Shipping</h3>
            <p className="text-sm text-gray-500 mt-2">
              Get free shipping on all orders above ₹499.
            </p>
          </div>
        </div>
      </section>

    
      <footer className="mt-20 py-6 text-center text-gray-600 border-t">
        © {new Date().getFullYear()} E-commerce — All rights reserved.
      </footer>
    </div>
  );
}
