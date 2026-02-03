import React from "react";
import GroupIcon from "/Images/Group.png";

function AddBrandManagement({ onClose }) {
  return (
    <>
      {/* ================= OVERLAY ================= */}
      <div className="fixed inset-0 bg-black/40 z-40"></div>

      {/* ================= POPUP (CENTER AFTER SIDEBAR) ================= */}
      <div className="fixed z-50 left-[125px] right-0 top-1/2 -translate-y-1/2 flex justify-center">
        <div className="w-[420px] bg-[#FFF7F0] rounded-[16px] p-6 shadow-xl">

          {/* ================= HEADER ================= */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <img src={GroupIcon} alt="icon" className="w-6 h-6" />
              <h2 className="font-semibold text-[18px]">
                Add New Brand
              </h2>
            </div>

            <button
              onClick={onClose}
              className="text-red-500 text-[20px] font-bold hover:opacity-30"
            >
              ✕
            </button>
          </div>

          {/* ================= FORM ================= */}
          <div className="space-y-4">

            {/* Category Name */}
            <input
              type="text"
              placeholder="Brand Name"
              className="w-full px-4 py-3 rounded-[10px] border border-[#FA9C42] outline-none bg-transparent"
            />

            {/* Select */}
            <select
              className="w-full px-4 py-3 rounded-[10px] border border-[#FA9C42] outline-none bg-transparent"
            >
              <option>Select..</option>
              <option>Available</option>
              <option>Unavailable</option>
            </select>

            {/* Save Button */}
            <div className="flex justify-end pt-2">
              <button
                className="px-8 py-2 rounded-full bg-[#FA9C42] text-white font-medium hover:opacity-90 transition"
              >
                Save
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default AddBrandManagement;
