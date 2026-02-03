import React from "react";
import GroupIcon from "/Images/Group.png";
import { FiPlus, FiTrash2 } from "react-icons/fi";

function AddProductManagement({ onClose }) {
  return (
    <>
      {/* ================= OVERLAY ================= */}
      <div className="fixed inset-0 bg-black/40 z-40"></div>

      {/* ================= POPUP ================= */}
      <div className="fixed z-50 left-[125px] right-0 top-1/2 -translate-y-1/2 flex justify-center">
        <div className="w-[843px] bg-[#FFF7EF] rounded-[20px] p-6 shadow-xl">

          {/* ================= HEADER ================= */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <img src={GroupIcon} alt="icon" className="w-6 h-6" />
              <h2 className="text-[18px] font-semibold">Add Product</h2>
            </div>

            <button
              onClick={onClose}
              className="text-red-500 text-[22px] font-bold hover:opacity-30"
            >
              ✕
            </button>
          </div>

          {/* ================= FORM ================= */}
          <div className="space-y-4">

            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="file"
                className="w-full px-4 py-3 rounded-[10px] border border-[#FA9C42] bg-transparent"
              />
              <input
                type="text"
                placeholder="Product Name"
                className="w-full px-4 py-3 rounded-[10px] border border-[#FA9C42] bg-transparent outline-none"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Eg: 13 x 13"
                className="w-full px-4 py-3 rounded-[10px] border border-[#FA9C42] bg-transparent outline-none"
              />
              <select className="w-full px-4 py-3 rounded-[10px] border border-[#FA9C42] bg-transparent outline-none">
                <option>Select Brand</option>
              </select>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-2 gap-4">
              <select className="w-full px-4 py-3 rounded-[10px] border border-[#FA9C42] bg-transparent outline-none">
                <option>Select Quality</option>
              </select>
              <select className="w-full px-4 py-3 rounded-[10px] border border-[#FA9C42] bg-transparent outline-none">
                <option>Select Category</option>
              </select>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Rate"
                className="w-full px-4 py-3 rounded-[10px] border border-[#FA9C42] bg-transparent outline-none"
              />
              <select className="w-full px-4 py-3 rounded-[10px] border border-[#FA9C42] bg-transparent outline-none">
                <option>Select Status</option>
              </select>
            </div>

            {/* Upload Link */}
            <input
              type="text"
              placeholder="Enter URL"
              className="w-full px-4 py-3 rounded-[10px] border border-[#FA9C42] bg-transparent outline-none"
            />

            {/* ================= GODOWN ================= */}
            <div>
              <p className="text-sm font-medium mb-2">Godown</p>
              <div className="flex gap-6">
                {["KKW", "MN", "TCS"].map((item) => (
                  <label key={item} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      className="accent-[#FA9C42] w-4 h-4"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* ================= BATCH TABLE ================= */}
            <div className="border border-[#FA9C42] rounded-[12px] p-4">
              <div className="grid grid-cols-4 gap-3 mb-3 text-sm font-medium">
                <p>Batch Number</p>
                <p>Quantity</p>
                <p>Location</p>
                <p className="text-center">Action</p>
              </div>

              <div className="grid grid-cols-4 gap-3 items-center">
                <input
                  type="number"
                  placeholder="Number"
                  className="px-3 py-2 rounded-[8px] border border-gray-300 outline-none"
                />
                <input
                  type="number"
                  placeholder="Number"
                  className="px-3 py-2 rounded-[8px] border border-gray-300 outline-none"
                />
                <input
                  type="text"
                  placeholder="Text"
                  className="px-3 py-2 rounded-[8px] border border-gray-300 outline-none"
                />

                <div className="flex justify-center gap-3">
                  <button className="p-2 rounded-full border border-[#FA9C42] text-[#FA9C42]">
                    <FiPlus />
                  </button>
                  <button className="p-2 rounded-full border border-red-400 text-red-500">
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </div>

            {/* ================= SAVE ================= */}
            <div className="flex justify-end pt-4">
              <button className="px-10 py-2 rounded-full bg-[#FA9C42] text-white font-medium hover:opacity-90">
                Save
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default AddProductManagement;
