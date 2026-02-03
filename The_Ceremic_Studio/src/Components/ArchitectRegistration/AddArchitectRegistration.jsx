import React from "react";
import GroupIcon from "/Images/Group.png"; 

function AddArchitectRegistration({ onClosed }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      {/* Modal Container */}
      <div className="relative w-[900px] max-h-[90vh] overflow-y-auto rounded-2xl bg-[#FFF6ED] p-6">

        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={GroupIcon} alt="Add Employee" className="h-6 w-6" />
            <h2 className="text-[22px] font-bold text-[#003B67]">
              Add Architect
            </h2>
          </div>

          <button
            onClick={onClosed}
            className="text-[22px] font-bold text-red-500 hover:opacity-30"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form className="grid grid-cols-2 gap-4">

          {/* First Name */}
          <div>
            <label className="mb-1 block text-sm font-medium text-[#003B67]">
              First Name <span className="text-red-500">*</span>
            </label>
            <input className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none" placeholder="Text.." />
          </div>

          {/* Last Name */}
          <div>
            <label className="mb-1 block text-sm font-medium text-[#003B67]">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none" placeholder="Text.." />
          </div>

          {/* Whatsapp Number */}
          <div>
            <label className="mb-1 block text-sm font-medium text-[#003B67]">
              Whatsapp No <span className="text-red-500">*</span>
            </label>
            <input className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none" placeholder="XXXXXXXXXX" />
          </div>

          

         

          {/* Commission */}
          <div>
            <label className="mb-1 block text-sm font-medium text-[#003B67]">
              Commission (%) <span className="text-red-500">*</span>
            </label>
            <input className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none" placeholder="Text.." />
          </div>

          {/* Birthdate */}
          <div>
            <label className="mb-1 block text-sm font-medium text-[#003B67]">
              Birthdate <span className="text-red-500">*</span>
            </label>
            <input type="date" className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none" />
          </div>

          {/* Lateral point */}
          <div>
            <label className="mb-1 block text-sm font-medium text-[#003B67]">
              Lateral Point <span className="text-red-500">*</span>
            </label>
            <input className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none" placeholder="Select.." />
          </div>

          
          
          
        </form>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <button className="rounded-xl bg-[#FA9C42] px-6 py-2 font-medium text-white hover:opacity-90">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddArchitectRegistration;
