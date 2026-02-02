import React from "react";

export default function Contact() {
  return (
    <div className="mt-[100px] w-full flex flex-col items-center px-4 sm:px-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact & Support</h1>

      <p className="text-gray-600 text-center max-w-2xl mb-10">
        We're here to help you 24/7. For order issues, refunds, returns, or any inquiry,
        reach us any time using the options below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition bg-white">
          <h2 className="text-xl font-semibold mb-3 text-indigo-700">
            Customer Support
          </h2>
          <p className="text-gray-600 mb-2">Toll Free Number:</p>
          <p className="text-2xl font-bold text-green-600 mb-4">1800-123-4567</p>
          <p className="text-gray-600">Email Support:</p>
          <p className="text-blue-700 font-semibold">support@ecommerce.com</p>
        </div>

        <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition bg-white">
          <h2 className="text-xl font-semibold mb-3 text-indigo-700">
            Refund & Return Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            You can request a refund or return within
            <span className="font-bold"> 10 days </span>
            of delivery. Refunds are processed instantly for digital payments
            and within 2–5 days for COD orders. Items must be unused and in
            original packaging.
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition bg-white">
          <h2 className="text-xl font-semibold mb-3 text-indigo-700">
            Delivery & Tracking
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Track your orders anytime in the "My Orders" section of your account.
            If your package is delayed, contact our support team for priority assistance.
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition bg-white">
          <h2 className="text-xl font-semibold mb-3 text-indigo-700">
            Payment Related Help
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We support UPI, Net Banking, Debit/Credit Cards, and Wallets. For failed
            payments or double deduction, refunds are issued automatically within
            3–7 days.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mt-12 bg-white p-8 rounded-xl shadow-lg w-full">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">
          Send Us a Message
        </h2>

        <form className="grid grid-cols-1 gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded-lg px-4 py-3 w-full focus:ring focus:ring-indigo-300 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="border rounded-lg px-4 py-3 w-full focus:ring focus:ring-indigo-300 outline-none"
          />

          <textarea
            placeholder="Write your message..."
            rows="4"
            className="border rounded-lg px-4 py-3 w-full focus:ring focus:ring-indigo-300 outline-none"
          ></textarea>

          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg hover:bg-indigo-700 transition">
            Submit Message
          </button>
        </form>
      </div>

      <p className="mt-10 text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} E-Commerce Support. All rights reserved.
      </p>
    </div>
  );
}
