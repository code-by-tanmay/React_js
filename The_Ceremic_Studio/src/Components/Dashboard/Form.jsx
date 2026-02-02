import React from "react";
import GroupIcon from "../../Images/Group.png";

function Form({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      {/* Form Container */}
      <div className="relative  w-[900px] max-h-[90vh] overflow-y-auto rounded-2xl bg-[#FFF6ED] p-6">
        
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={GroupIcon}
              alt="Add Customer"
              className="h-[26px] w-[26px]"
            />
            <h2 className="text-[22px] font-bold text-[#003B67]">
              Add Customer
            </h2>
          </div>

          <button
            onClick={onClose}
            className="cursor-pointer bg-transparent text-[22px] font-bold text-red-500 hover:opacity-30"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form className="grid grid-cols-2 gap-4">
          <input
            className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none"
            placeholder="First Name *"
          />
          <input
            className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none"
            placeholder="Last Name *"
          />

          <input
            className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none"
            placeholder="Mobile No *"
          />
          <input
            className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none"
            placeholder="Email *"
          />

          <select className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none">
            <option>Select Employee *</option>
            <option value="">option 1</option>
            <option value="">option 2</option>
            <option value="">option 3</option>

          </select>

          <select className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none">
            <option>Select Architect *</option>
             <option value="">option 1</option>
            <option value="">option 2</option>
            <option value="">option 3</option>
            
          </select>

          <select className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none">
            <option>User Type *</option>
             <option value="">option 1</option>
            <option value="">option 2</option>
            <option value="">option 3</option>

          </select>

          <input
            type="date"
            className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none"
          />

          <textarea
            className="col-span-2 w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none"
            placeholder="Follow-Up Response *"
          />

          <textarea
            className="col-span-2 w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none"
            placeholder="Notes"
          />
        </form>

        {/* Footer */}
        <div className="mt-5 flex justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-lg border border-gray-400 bg-transparent px-4 py-2 hover:bg-[#FA9C42] hover:text-white "
          >
            Cancel
          </button>

          <button
            type="submit"
            className="cursor-pointer rounded-lg bg-[#FA9C42] px-4 py-2 font-medium text-white hover:bg-orange-400"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
