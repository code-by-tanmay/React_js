import React from "react";
import GroupIcon from "/Images/Group.png";

function Feedback({ employee, onClose }) {
  if (!employee) return null;

  // 👉 Different feedback for each client
  const feedbackList = [
    {
      client: "Client 1",
      message: "Very good work and professional behavior.",
    },
    {
      client: "Client 2",
      message: "Great communication and timely updates.",
    },
    {
      client: "Client 3",
      message: "Handled the project smoothly and efficiently.",
    },
  ];

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 z-40"></div>

      {/* Popup (center after sidebar) */}
      <div className="fixed z-50 left-[125px] right-0 top-1/2 -translate-y-1/2 flex justify-center">
        <div className="w-[420px] bg-[#FFF7F0] rounded-[16px] p-6 shadow-xl">

          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <img src={GroupIcon} alt="icon" className="w-6 h-6" />
              <h2 className="font-semibold text-[18px]">
                Client Feedback
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
            Employee – <span className="font-medium">{employee.name}</span>
          </p>

          {/* Feedback Boxes */}
          {feedbackList.map((item, index) => (
            <div
              key={index}
              className="mb-3 rounded-[12px] border border-[#FA9C42] p-3 text-[14px]"
            >
              <p className="font-medium mb-1">{item.client}</p>
              <p className="text-[#444]">{item.message}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Feedback;
