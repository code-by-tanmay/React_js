import React from "react";
import GroupIcon from "/Images/Group.png";



function Rating({ employee, onClose }) {
  if (!employee) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 z-40"></div>

      {/* Modal (center AFTER sidebar) */}
      <div className="fixed z-50 left-[125px] right-0 top-1/2 -translate-y-1/2 flex justify-center">
        <div className="w-[420px] bg-[#FFF7F0] rounded-[16px] p-6 shadow-xl">

          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <img src={GroupIcon} alt="icon" className="w-6 h-6" />
              <h2 className="font-semibold text-[18px]">
                Client Rating
              </h2>
            </div>

            <button
              onClick={onClose}
              className="text-red-500 text-[20px] font-bold hover:opacity-30"
            >
              ✕
            </button>
          </div>

          {/* Employee Name */}
          <p className="text-[14px] mb-4">
            Employee - <span className="font-medium">{employee.name}</span>
          </p>

          {/* Rating Cards */}
          {["Client 1", "Client 2", "Client 3"].map((client, index) => (
            <div
              key={index}
              className="mb-3 rounded-[12px] border border-[#FA9C42] p-3"
            >
              <p className="text-[14px] mb-2">{client}</p>
              <div className="flex gap-1 text-yellow-400 text-[18px]">
                ★ ★ ★ ★ ★
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Rating;
