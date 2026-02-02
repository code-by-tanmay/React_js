import React from "react";
import GroupIcon from "../../Images/Group.png";

function FollowHistory({ customer, onClose }) {
  if (!customer) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 z-40"></div>

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 z-50 w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-[16px] bg-[#FFF7F0] p-6 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          {/* Left: Icon + Title */}
          <div className="flex items-center gap-2">
            <img
              src={GroupIcon}
              alt="Group Icon"
              className="w-[22px] h-[22px]"
            />
            <h2 className="text-[18px] font-semibold">
              Follow up History - {customer.customer}
            </h2>
          </div>

          {/* Right: Close button */}
          <button
            onClick={onClose}
            className="text-red-500 text-[20px] font-bold hover:opacity-30"
          >
            ✕
          </button>
        </div>

        <div className="space-y-3">
          <div className="rounded-[10px] border border-[#FA9C42] p-3 text-[13px]">
            <p className="font-medium">16/12/2025 &nbsp; 13:00</p>
            <p>ABCD</p>
          </div>

          <div className="rounded-[10px] border border-[#FA9C42] p-3 text-[13px]">
            <p className="font-medium">15/12/2025 &nbsp; 11:30</p>
            <p>Second follow up done</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FollowHistory;
