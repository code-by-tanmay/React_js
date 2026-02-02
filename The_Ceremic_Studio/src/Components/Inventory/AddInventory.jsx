import React from 'react'

function AddInventory() {
  return (
    <>
    <div>

      {/* ================= TOP BAR ================= */}
      <div className="relative top-[30px] left-[125px] w-[1350px] h-[70px] flex items-center justify-between px-[35px] rounded-[10px] border border-[#003B67]">
        <p className="font-bold text-[22px]">Add Inventory</p>
    </div>

    </div>

       <div className="ml-[50px] pt-[120px] flex justify-center">
      
      {/* MAIN FORM CARD */}
      <div className="w-[1200px] bg-[#FFF9F3] border border-[#FA9C42] rounded-[40px] p-[40px]">

        {/* HEADER */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-6 h-6 flex items-center justify-center rounded bg-blue-500 text-white text-sm">
            i
          </div>
          <h2 className="text-[22px] font-semibold">Add Product</h2>
        </div>

        {/* FORM GRID */}
        <div className="grid grid-cols-3 gap-x-8 gap-y-6">

          {/* Product */}
          <div className="col-span-2">
            <label className="text-sm font-medium">Product</label>
            <input
              type="text"
              placeholder="LR / Docket No."
              className="w-full mt-1 px-4 py-2 rounded-[10px] border border-[#FA9C42] outline-none"
            />
          </div>

          {/* Size */}
          <div>
            <label className="text-sm font-medium">Size</label>
            <input
              type="text"
              placeholder="Eg. 50"
              className="w-full mt-1 px-4 py-2 rounded-[10px] border border-[#FA9C42] outline-none"
            />
          </div>

          {/* Quality */}
          <div>
            <label className="text-sm font-medium">Quality</label>
            <input
              type="text"
              placeholder="Eg. 13"
              className="w-full mt-1 px-4 py-2 rounded-[10px] border border-[#FA9C42] outline-none"
            />
          </div>

          {/* Rate */}
          <div>
            <label className="text-sm font-medium">Rate</label>
            <input
              type="number"
              placeholder="Number.."
              className="w-full mt-1 px-4 py-2 rounded-[10px] border border-[#FA9C42] outline-none"
            />
          </div>

          {/* Batch */}
          <div>
            <label className="text-sm font-medium">Batch</label>
            <input
              type="number"
              placeholder="Number.."
              className="w-full mt-1 px-4 py-2 rounded-[10px] border border-[#FA9C42] outline-none"
            />
          </div>

          {/* Available */}
          <div>
            <label className="text-sm font-medium">Available</label>
            <input
              type="text"
              placeholder="Eg. 150,000"
              className="w-full mt-1 px-4 py-2 rounded-[10px] border border-[#FA9C42] outline-none"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="text-sm font-medium">Quantity</label>
            <input
              type="text"
              placeholder="Eg. 150,000"
              className="w-full mt-1 px-4 py-2 rounded-[10px] border border-[#FA9C42] outline-none"
            />
          </div>

          {/* Total */}
          <div>
            <label className="text-sm font-medium">Total</label>
            <input
              type="text"
              placeholder="Eg. 150,000"
              className="w-full mt-1 px-4 py-2 rounded-[10px] border border-[#FA9C42] outline-none"
            />
          </div>

          {/* COV */}
          <div>
            <label className="text-sm font-medium">COV</label>
            <input
              type="text"
              placeholder="Eg. 150,000"
              className="w-full mt-1 px-4 py-2 rounded-[10px] border border-[#FA9C42] outline-none"
            />
          </div>

          {/* Godown */}
          <div>
            <label className="text-sm font-medium">Godown</label>
            <select className="w-full mt-1 px-4 py-2 rounded-[10px] border border-[#FA9C42] outline-none">
              <option>Text</option>
            </select>
          </div>

          {/* Extra input (as per screenshot) */}
          <div>
            <label className="text-sm font-medium">&nbsp;</label>
            <input
              type="text"
              placeholder="Eg. 150,000"
              className="w-full mt-1 px-4 py-2 rounded-[10px] border border-[#FA9C42] outline-none"
            />
          </div>

        </div>

        {/* ACTIONS */}
        <div className="flex justify-end items-center gap-4 mt-10">
          <button className="w-10 h-10 rounded-full border border-[#FA9C42] text-[#000000] text-xl hover:bg-[#FA9C42] hover:text-white">
            +
          </button>
          <button className="w-10 h-10 rounded-full border border-red-500 text-red-500 hover:bg-[#FA9C42] hover:text-white">
            🗑
          </button>
          <button className="px-10 py-2 bg-[#FA9C42] text-white rounded-[20px] font-semibold hover:bg-orange-400">
            Save
          </button>
        </div>

      </div>
    </div>

    </>
  )
}

export default AddInventory
