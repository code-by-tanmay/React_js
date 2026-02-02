import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import GroupIcon from "../../Images/Group.png";

function ManageQuotation() {
  const [showModal, setShowModal] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);

  const employees = [
    {
      id: 1,
      purchaseDate: "16/12/2025",
      billNo: "B13-44",
      clientName: "ABCD",
      item: 44,
      subTotal: "₹ 13,000",
    },
    {
      id: 2,
      purchaseDate: "17/12/2025",
      billNo: "B13-45",
      clientName: "ABCD",
      item: 44,
      subTotal: "₹ 13,000",
    },
    {
      id: 3,
      purchaseDate: "18/12/2025",
      billNo: "B13-46",
      clientName: "ABCD",
      item: 44,
      subTotal: "₹ 13,000",
    },
    {
      id: 4,
      purchaseDate: "19/12/2025",
      billNo: "B13-47",
      clientName: "ABCD",
      item: 44,
      subTotal: "₹ 13,000",
    },
  ];

  function handlePdf(emp) {
    setSelectedBill(emp);
    setShowModal(true);
  }

  function handlePay(emp) {
    setSelectedBill(emp);
    setShowPaymentForm(true);
  }

  function handlePrint() {
    window.print();
  }

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="relative top-[30px] left-[125px] w-[1350px] h-[70px] flex items-center justify-between px-[35px] py-[10px] rounded-[10px] border border-[#003B67]">
        <p className="font-bold text-[22px]">Quotation Management</p>

        <div className="pl-[450px]">
          <div className="pl-[40px] w-[353px] h-[40px] flex items-center gap-[10px] px-[20px] rounded-[30px] border-[2px] border-[#FA9C42]">
            <FaSearch />
             <input
            type="text"
            placeholder="Search..."
            className="w-full h-full outline-none border-none text-gray-700 bg-transparent"
          />
          </div>
        </div>

        <button className="px-[12px] py-[6px] rounded-[10px] border-2 border-[#FA9C42] hover:bg-[#FA9C42] hover:text-amber-50">
          Refresh
        </button>
      </div>

      {/* ================= TABLE ================= */}
      <div className="relative top-[70px] left-[125px] w-[1350px] rounded-xl p-4">
        <div className="grid grid-cols-[0.6fr_1.5fr_1fr_1.5fr_1fr_1.5fr_0.8fr] bg-[#FA9C42] text-white rounded-[10px] px-6 py-3 text-sm font-semibold">
          <div>ID</div>
          <div>Client Name</div>
          <div>Item</div>
          <div>Purchase Date</div>
          <div>Total</div>
          <div className="text-center">Options</div>
          <div className="text-center">PDF</div>
        </div>

        {employees.map((emp) => (
          <div
            key={emp.id}
            className="grid grid-cols-[0.6fr_1.5fr_1fr_1.5fr_1fr_1.5fr_0.8fr] items-center px-6 py-4 border-b border-[#F1C08B] text-sm"
          >
            <div>{emp.id}</div>
            <div>{emp.clientName}</div>
            <div>{emp.item}</div>
            <div>{emp.purchaseDate}</div>
            <div className="text-green-500 font-semibold">{emp.subTotal}</div>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => handlePay(emp)}
                className="px-4 py-1 rounded-lg border-2 border-[#00AEEF] text-[#00AEEF] hover:bg-[#FA9C42]"
              >
                Pay
              </button>

              <button className="px-4 py-1 rounded-lg border-2 border-[#FA9C42] text-[#FA9C42] hover:bg-[#FA9C42] hover:text-red-600">
                DC
              </button>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => handlePdf(emp)}
                className="px-4 py-1 rounded-lg border-2 border-[#DC3545] text-[#DC3545] hover:bg-[#FA9C42]"
              >
                PDF
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= PAYMENT DETAILS FORM ================= */}
      {showPaymentForm && selectedBill && (
        <div className="fixed inset-0 z-40 flex items-center justify-center pt-[150px]">
          <div className="w-[900px] bg-[#FFF3E8] rounded-[15px] border border-[#FA9C42] p-6">

            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <img src={GroupIcon} alt="icon" className="w-6 h-6" />
                <h2 className="text-[20px] font-bold">Payment Details</h2>
              </div>

              <button onClick={() => setShowPaymentForm(false)}>
                <IoClose className="text-red-500 text-2xl" />
              </button>
            </div>

            {/* 🔥 ADDED: SELECTED BILL INFO */}
            <div className="mb-6 p-4 bg-white rounded-[10px] border border-[#FA9C42] text-sm">
              <div className="grid grid-cols-2 gap-y-2">
                <p><b>Bill No:</b> {selectedBill.billNo}</p>
                <p className="text-right"><b>Date:</b> {selectedBill.purchaseDate}</p>
                <p><b>Client Name:</b> {selectedBill.clientName}</p>
                <p><b>Items:</b> {selectedBill.item}</p>
                <p className="col-span-2 text-green-600 font-semibold mt-1">
                  Total Amount: {selectedBill.subTotal}
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
              <div>
                <label className="font-semibold">Grand Total *</label>
                <input
                  value={selectedBill.subTotal}
                  disabled
                  className="w-full mt-1 px-4 py-2 rounded-[10px] border border-[#FA9C42]"
                />
              </div>

              <div>
                <label className="font-semibold">Paid Amount *</label>
                <input className="w-full mt-1 px-4 py-2 rounded-[10px] border border-[#FA9C42]" />
              </div>

              <div>
                <label className="font-semibold">Due Amount *</label>
                <input className="w-full mt-1 px-4 py-2 rounded-[10px] border border-[#FA9C42]" />
              </div>

              <div>
                <label className="font-semibold">Enter Amount *</label>
                <input className="w-full mt-1 px-4 py-2 rounded-[10px] border border-[#FA9C42]" />
              </div>

              <div>
                <label className="font-semibold">Payment Type *</label>
                <select className="w-full mt-1 px-4 py-2 rounded-[10px] border border-[#FA9C42]">
                  <option>Cash</option>
                  <option>UPI</option>
                  <option>Card</option>
                </select>
              </div>

              <div>
                <label className="font-semibold">Payment Date *</label>
                <input type="date" className="w-full mt-1 px-4 py-2 rounded-[10px] border border-[#FA9C42]" />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-10 py-2 bg-[#FA9C42] text-white rounded-full font-semibold">
                Save
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ================= PDF MODAL ================= */}
      {showModal && selectedBill && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40"></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="w-[650px] bg-white rounded-[15px] border-[3px] border-[#FA9C42] p-6 relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-red-500 text-xl"
              >
                <IoClose />
              </button>

              <h2 className="text-center text-lg font-bold mb-6">
                Quotation Details
              </h2>

              <div className="text-center mb-4">
                <p><b>Bill No:</b> {selectedBill.billNo}</p>
                <p><b>Date:</b> {selectedBill.purchaseDate}</p>
                <p><b>Client:</b> {selectedBill.clientName}</p>
                <p className="text-green-600 font-semibold mt-2">
                  Total: {selectedBill.subTotal}
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handlePrint}
                  className="px-8 py-2 rounded-[10px] border-2 border-[#003B67] text-[#003B67] hover:bg-[#FA9C42]"
                >
                  Print
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ManageQuotation;
