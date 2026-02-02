import React from "react";

function AddPremiumServices({ onClose, onSuccess }) {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <div className="bg-[#0f0f0f] w-[420px] rounded-xl p-8 border border-gray-700 relative">
        
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-[24px] font-semibold text-white mb-6 text-center">
          Premium Membership
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-[#F5A623]"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-[#F5A623]"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-[#F5A623]"
          />

          <select className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#F5A623]">
            <option>Select Role</option>
            <option>Artist</option>
            <option>Producer</option>
            <option>Director</option>
          </select>
        </div>

        <button
          onClick={onSuccess}
          className="mt-6 w-full bg-[#F5A623] text-black py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
}

export default AddPremiumServices;
