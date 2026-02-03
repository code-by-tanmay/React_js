import React from "react";
import GroupIcon from "/Images/Group.png";

function FollowUp({ customer, onClose }) {
  if (!customer) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 z-40"></div>

      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 z-50 w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-[16px] bg-[#FFF7F0] p-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <img src={GroupIcon} alt="Group" className="w-[22px] h-[22px]" />
            <h2 className="text-[18px] font-semibold">
              Next Follow Up
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-red-500 text-[20px] font-bold hover:opacity-30"
          >
            ✕
          </button>
        </div>

        {/* Date Input */}
        <div className="mb-4">
          <input
            type="date"
            className="w-full rounded-[10px] border border-[#FA9C42] px-4 py-3 text-[14px] outline-none"
          />
        </div>

        {/* Follow Up Response */}
        <div className="mb-6">
          <textarea
            placeholder="Follow Up Response"
            className="w-full h-[90px] rounded-[10px] border border-[#FA9C42] px-4 py-3 text-[14px] outline-none resize-none"
          />
        </div>

        {/* Save Button */}
        <div className="flex justify-center">
          <button className="rounded-[20px] bg-[#FA9C42] px-10 py-2 text-white font-medium">
            Save
          </button>
        </div>

      </div>
    </>
  );
}

export default FollowUp;
