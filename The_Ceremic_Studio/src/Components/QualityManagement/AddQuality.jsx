import React from "react";
import GroupIcon from "../../Images/Group.png";

function AddQuality({ onClose }) {
  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 z-40"></div>

      {/* Popup (center after sidebar) */}
      <div className="fixed z-50 left-[125px] right-0 top-1/2 -translate-y-1/2 flex justify-center">
        <div className="w-[420px] bg-[#FFF7F0] rounded-[16px] p-6 shadow-xl">

          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <img src={GroupIcon} alt="icon" className="w-6 h-6" />
              <h2 className="font-semibold text-[18px]">
                Add New Quality
              </h2>
            </div>

            <button
              onClick={onClose}
              className="text-red-500 text-[22px] font-bold hover:opacity-30"
            >
              ✕
            </button>
          </div>

          {/* Form */}
          <div className="space-y-4">

            {/* Quality Name */}
            <input
              type="text"
              placeholder="Quality Name"
              className="w-full rounded-[10px] border border-[#FA9C42] px-4 py-2 outline-none"
            />

            {/* Select */}
            <select
              className="w-full rounded-[10px] border border-[#FA9C42] px-4 py-2 outline-none text-gray-500"
            >
              <option>Select..</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

            {/* Save Button */}
            <div className="flex justify-end pt-2">
              <button
                className="px-8 py-2 rounded-[20px] bg-[#FA9C42] text-white font-medium hover:opacity-90"
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

export default AddQuality;
