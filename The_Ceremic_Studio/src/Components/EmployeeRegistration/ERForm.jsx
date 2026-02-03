import React from "react";
import GroupIcon from "/Images/Group.png"; 

function ERForm({ onClosed }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      {/* Modal Container */}
      <div className="relative w-[900px] max-h-[90vh] overflow-y-auto rounded-2xl bg-[#FFF6ED] p-6">

        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={GroupIcon} alt="Add Employee" className="h-6 w-6" />
            <h2 className="text-[22px] font-bold text-[#003B67]">
              Add Employee
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

          {/* Mobile */}
          <div>
            <label className="mb-1 block text-sm font-medium text-[#003B67]">
              Mobile No <span className="text-red-500">*</span>
            </label>
            <input className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none" placeholder="XXXXXXXXXX" />
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium text-[#003B67]">
              Email <span className="text-red-500">*</span>
            </label>
            <input className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none" placeholder="Eg. abc@xyz.com" />
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm font-medium text-[#003B67]">
              Password <span className="text-red-500">*</span>
            </label>
            <input type="password" className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none" placeholder="Text.." />
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

          {/* Salary */}
          <div>
            <label className="mb-1 block text-sm font-medium text-[#003B67]">
              Salary <span className="text-red-500">*</span>
            </label>
            <input className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none" placeholder="Select.." />
          </div>

          {/* Expense */}
          <div>
            <label className="mb-1 block text-sm font-medium text-[#003B67]">
              Expense <span className="text-red-500">*</span>
            </label>
            <input className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none" placeholder="Text.." />
          </div>

          {/* Advance Paid */}
          <div>
            <label className="mb-1 block text-sm font-medium text-[#003B67]">
              Advance Paid <span className="text-red-500">*</span>
            </label>
            <input className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none" placeholder="Text.." />
          </div>

          {/* Upload Aadhar */}
          <div>
            <label className="mb-1 block text-sm font-medium text-[#003B67]">
              Upload Aadhar Photo <span className="text-red-500">*</span>
            </label>
            <input type="file" className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none" />
          </div>

          {/* Upload Pancard */}
          <div>
            <label className="mb-1 block text-sm font-medium text-[#003B67]">
              Upload Pancard Photo <span className="text-red-500">*</span>
            </label>
            <input type="file" className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none" />
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

export default ERForm;
