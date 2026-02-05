import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function ManageTnventory() {

  const [showModal, setShowModal] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);

  // 🔍 SEARCH STATE (LOGIC ONLY)
  const [searchText, setSearchText] = useState("");

  const employees = [
    {
      id: 1,
      purchaseDate: "16/12/2025",
      billNo: "B13-44",
      clientName: "Client One",
      contact: "9876543210",
      subTotal: "₹13,000",
    },
    {
      id: 2,
      purchaseDate: "17/12/2025",
      billNo: "B13-45",
      clientName: "Client Two",
      contact: "9876543211",
      subTotal: "₹15,500",
    },
    {
      id: 3,
      purchaseDate: "18/12/2025",
      billNo: "B13-46",
      clientName: "Client Three",
      contact: "9876543212",
      subTotal: "₹11,200",
    },
    {
      id: 4,
      purchaseDate: "19/12/2025",
      billNo: "B13-47",
      clientName: "Client Four",
      contact: "9876543213",
      subTotal: "₹18,750",
    },
    {
      id: 5,
      purchaseDate: "20/12/2025",
      billNo: "B13-48",
      clientName: "Client Five",
      contact: "9876543214",
      subTotal: "₹20,000",
    },
    {
      id: 6,
      purchaseDate: "21/12/2025",
      billNo: "B13-49",
      clientName: "Client Six",
      contact: "9876543215",
      subTotal: "₹14,600",
    },
    {
      id: 7,
      purchaseDate: "22/12/2025",
      billNo: "B13-50",
      clientName: "Client Seven",
      contact: "9876543216",
      subTotal: "₹16,900",
    }
  ];

  // 🔍 FILTER LOGIC (ONLY LOGIC ADDED)
  const filteredEmployees = employees.filter((emp) =>
    Object.values(emp)
      .join(" ")
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  function handleView(emp) {
    setSelectedBill(emp);
    setShowModal(true);
  }

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="relative top-[30px] left-[125px] w-[1350px] h-[70px] flex items-center justify-between px-[35px] py-[10px] rounded-[10px] border border-[#003B67]">
        <p className="font-bold text-[22px]">Inventory Management</p>

        <div className="pl-[450px]">
          <div className="pl-[40px] w-[353px] h-[40px] flex items-center gap-[10px] px-[20px] rounded-[30px] border-[2px] border-[#FA9C42]">
            <FaSearch />
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full h-full outline-none border-none text-gray-700 bg-transparent"
            />
          </div>
        </div>

        <button className="px-[12px] py-[6px] rounded-[10px] border-2 border-[#FA9C42] hover:bg-[#FA9C42] hover:text-white">
          Refresh
        </button>
      </div>

      {/* ================= TABLE ================= */}
      <div className="relative top-[60px] left-[125px] w-[1350px]">

        {/* Header */}
        <div className="grid grid-cols-[0.5fr_1.2fr_1.2fr_1.5fr_1.2fr_1fr_1.8fr] bg-[#FA9C42] text-white rounded-lg px-6 py-4">
          <div>Id</div>
          <div>Purchase date</div>
          <div>Bill no</div>
          <div>Client name</div>
          <div>Contact</div>
          <div>Subtotal</div>
          <div className="pl-[80px]">Actions</div>
        </div>

        {/* Rows */}
        {filteredEmployees.map((emp) => (
          <div
            key={emp.id}
            className="grid grid-cols-[0.5fr_1.2fr_1.2fr_1.5fr_1.2fr_1fr_1.8fr] items-center px-6 py-4 border-b border-[#F1C08B]"
          >
            <div>{emp.id}</div>
            <div>{emp.purchaseDate}</div>
            <div>{emp.billNo}</div>
            <div>{emp.clientName}</div>
            <div>{emp.contact}</div>
            <div className="text-[#2BCB12]">{emp.subTotal}</div>

            <div className="flex gap-3">
              <button
                onClick={() => handleView(emp)}
                className="px-4 py-1.5 rounded-lg border-2 border-[#00abed] hover:bg-[#FA9C42] hover:text-white"
              >
                View
              </button>
              <button className="px-4 py-1.5 rounded-lg border-2 border-[#FA9C42] hover:bg-[#FA9C42] hover:text-white">
                Edit
              </button>
              <button className="px-4 py-1.5 rounded-lg border-2 border-[#DC3545] hover:bg-[#FA9C42] hover:text-white">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {showModal && selectedBill && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40"></div>

          <div className="fixed z-50 inset-0 flex items-center justify-center">
            <div className="w-[656px] bg-white rounded-[15px] border-[3px] border-[#FA9C42] p-[20px] relative">

              <button
                onClick={() => setShowModal(false)}
                className="absolute right-4 top-4 text-red-500 text-xl"
              >
                <IoClose />
              </button>

              <h2 className="text-center text-[20px] font-bold mb-4">
                Purchase Details
              </h2>

              <div className="grid grid-cols-2 gap-y-2 text-[14px] mb-4">
                <p><b>Bill No:</b> {selectedBill.billNo}</p>
                <p className="pl-[150px]"><b>Date:</b> {selectedBill.purchaseDate}</p>
                <div>
                  <p><b>client:</b> {selectedBill.clientName}</p>
                  <p><b>Contact:</b> {selectedBill.contact}</p>
                </div>
                <p className="text-green-600 font-semibold col-span-2">
                  Sub-Total: {selectedBill.subTotal}
                </p>
              </div>

              <div className="border rounded-lg p-3 text-center text-gray-500">
                Item Details (next step)
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ManageTnventory;









// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { IoClose } from "react-icons/io5";

// function ManageTnventory() {

//   const [showModal, setShowModal] = useState(false);
//   const [selectedBill, setSelectedBill] = useState(null);

//   const employees = [
//     {
//       id: 1,
//       purchaseDate: "16/12/2025",
//       billNo: "B13-44",
//       clientName: "Client One",
//       contact: "9876543210",
//       subTotal: "₹13,000",
//     },
//     {
//       id: 2,
//       purchaseDate: "17/12/2025",
//       billNo: "B13-45",
//       clientName: "Client Two",
//       contact: "9876543211",
//       subTotal: "₹15,500",
//     },
//     {
//       id: 3,
//       purchaseDate: "18/12/2025",
//       billNo: "B13-46",
//       clientName: "Client Three",
//       contact: "9876543212",
//       subTotal: "₹11,200",
//     },

//     {
//   id: 4,
//   purchaseDate: "19/12/2025",
//   billNo: "B13-47",
//   clientName: "Client Four",
//   contact: "9876543213",
//   subTotal: "₹18,750",
// },
// {
//   id: 5,
//   purchaseDate: "20/12/2025",
//   billNo: "B13-48",
//   clientName: "Client Five",
//   contact: "9876543214",
//   subTotal: "₹20,000",
// },
// {
//   id: 6,
//   purchaseDate: "21/12/2025",
//   billNo: "B13-49",
//   clientName: "Client Six",
//   contact: "9876543215",
//   subTotal: "₹14,600",
// },
// {
//   id: 7,
//   purchaseDate: "22/12/2025",
//   billNo: "B13-50",
//   clientName: "Client Seven",
//   contact: "9876543216",
//   subTotal: "₹16,900",
// }

//   ];

//   function handleView(emp) {
//     setSelectedBill(emp);
//     setShowModal(true);
//   }

//   return (
//     <>
//       {/* ================= TOP BAR ================= */}
//       <div className="relative top-[30px] left-[125px] w-[1350px] h-[70px] flex items-center justify-between px-[35px] py-[10px] rounded-[10px] border border-[#003B67]">
//         <p className="font-bold text-[22px]">Inventory Management</p>

//         <div className="pl-[450px]">
//           <div className="pl-[40px] w-[353px] h-[40px] flex items-center gap-[10px] px-[20px] rounded-[30px] border-[2px] border-[#FA9C42]">
//             <FaSearch />
//              <input
//             type="text"
//             placeholder="Search..."
//             className="w-full h-full outline-none border-none text-gray-700 bg-transparent"
//           />
//           </div>
//         </div>

//         <button className="px-[12px] py-[6px] rounded-[10px] border-2 border-[#FA9C42] hover:bg-[#FA9C42] hover:text-white">
//           Refresh
//         </button>
//       </div>

//       {/* ================= TABLE ================= */}
//       <div className="relative top-[60px] left-[125px] w-[1350px]">

//         {/* Header */}
//         <div className="grid grid-cols-[0.5fr_1.2fr_1.2fr_1.5fr_1.2fr_1fr_1.8fr] bg-[#FA9C42] text-white rounded-lg px-6 py-4">
//           <div>Id</div>
//           <div>Purchase date</div>
//           <div>Bill no</div>
//           <div>Client name</div>
//           <div>Contact</div>
//           <div>Subtotal</div>
//           <div className="pl-[80px]">Actions</div>
//         </div>

//         {/* Rows */}
//         {employees.map((emp) => (
//           <div
//             key={emp.id}
//             className="grid grid-cols-[0.5fr_1.2fr_1.2fr_1.5fr_1.2fr_1fr_1.8fr] items-center px-6 py-4 border-b border-[#F1C08B]"
//           >
//             <div>{emp.id}</div>
//             <div>{emp.purchaseDate}</div>
//             <div>{emp.billNo}</div>
//             <div>{emp.clientName}</div>
//             <div>{emp.contact}</div>
//             <div className="text-[#2BCB12]">{emp.subTotal}</div>

//             <div className="flex gap-3">
//               <button
//                 onClick={() => handleView(emp)}
//                 className="px-4 py-1.5 rounded-lg border-2 border-[#00abed] hover:bg-[#FA9C42] hover:text-white"
//               >
//                 View
//               </button>
//               <button className="px-4 py-1.5 rounded-lg border-2 border-[#FA9C42] hover:bg-[#FA9C42] hover:text-white">
//                 Edit
//               </button>
//               <button className="px-4 py-1.5 rounded-lg border-2 border-[#DC3545] hover:bg-[#FA9C42] hover:text-white">
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ================= MODAL (FIGMA STYLE) ================= */}
//       {showModal && selectedBill && (
//         <>
//           {/* Overlay */}
//           <div className="fixed inset-0 bg-black/40 z-40"></div>

//           {/* Modal */}
//           <div className="fixed z-50 inset-0 flex items-center justify-center">
//             <div className="w-[656px] bg-white rounded-[15px] border-[3px] border-[#FA9C42] p-[20px] relative">

//               <button
//                 onClick={() => setShowModal(false)}
//                 className="absolute right-4 top-4 text-red-500 text-xl"
//               >
//                 <IoClose />
//               </button>

//               <h2 className="text-center text-[20px] font-bold mb-4">
//                 Purchase Details
//               </h2>

//               <div className="grid grid-cols-2 gap-y-2 text-[14px] mb-4">
//                 <p><b>Bill No:</b> {selectedBill.billNo}</p>
//                 <p className="pl-[150px]"><b>Date:</b> {selectedBill.purchaseDate}</p>
//                 <div>
//                   <p><b>client:</b> {selectedBill.clientName}</p>
//                 <p><b>Contact:</b> {selectedBill.contact}</p>
//                 </div>
//                 <p className="text-green-600 font-semibold col-span-2">
//                   Sub-Total: {selectedBill.subTotal}
//                 </p>
//               </div>

//               {/* Item table placeholder (as per Figma) */}
//               <div className="border rounded-lg p-3 text-center text-gray-500">
//                 Item Details (next step)
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// }

// export default ManageTnventory;
