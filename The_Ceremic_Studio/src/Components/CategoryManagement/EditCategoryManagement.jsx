import React, { useState } from "react";
import GroupTwo from "/Images/Grouptwo.png";

function EditCategoryManagement({ quality, onClose, onSave }) {
  const [name, setName] = useState(quality.name);
  const [status, setStatus] = useState(
    quality.enabled ? "Available" : "Unavailable"
  );

 
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
              <img src={GroupTwo} alt="icon" className="w-6 h-6" />
              <h2 className="font-semibold text-[18px]">Edit Category </h2>
            </div>

            <button
              onClick={onClose}
              className="text-red-500 text-[22px] font-bold hover:opacity-30" 
            >
              ✕
            </button>
          </div>

          {/* Quality Name */}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Quality"
            className="w-full mb-4 px-4 py-3 rounded-[10px] border border-[#FA9C42] focus:outline-none"
          />

          {/* Status */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full mb-6 px-4 py-3 rounded-[10px] border border-[#FA9C42] focus:outline-none"
          >
            <option>Available</option>
            <option>Unavailable</option>
          </select>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={() =>
                onSave({
                  ...quality,
                  name,
                  enabled: status === "Available",
                })
              }
              className="px-8 py-2 rounded-full bg-[#FA9C42] text-white font-medium hover:opacity-90"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditCategoryManagement;
