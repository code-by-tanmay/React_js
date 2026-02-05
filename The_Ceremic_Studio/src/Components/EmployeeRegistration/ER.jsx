import React, { useState, useContext, useMemo } from "react";
import ERForm from "./ERForm";
import Rating from "./Rating";
import Feedback from "./Feedback";
import { SearchContext } from "../../Context/SearchContext";

function ER() {
  // Add Employee modal
  const [showForm, setShowForm] = useState(false);

  // Rating popup
  const [showRating, setShowRating] = useState(false);

  // Feedback popup
  const [showFeedback, setShowFeedback] = useState(false);

  // Selected employee
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // ✅ GLOBAL SEARCH VALUE
  const { searchInput } = useContext(SearchContext);

  // Dummy employee data
  const employees = [
    {
      id: 1,
      name: "Sunny Gupta",
      email: "sagar@xyz.com",
      phone: "7859866674",
      commission: "9.00%",
      salary: "₹ 1,xx,xxx",
      expense: "₹ 1,xxx",
      birthdate: "16/12/1995",
    },
    {
      id: 2,
      name: "Tanmay Rote",
      email: "sagar@xyz.com",
      phone: "7859866674",
      commission: "9.00%",
      salary: "₹ 1,xx,xxx",
      expense: "₹ 1,xxx",
      birthdate: "16/12/1995",
    },
    {
      id: 3,
      name: "Tejas Derle",
      email: "sagar@xyz.com",
      phone: "7859866674",
      commission: "9.00%",
      salary: "₹ 1,xx,xxx",
      expense: "₹ 1,xxx",
      birthdate: "16/12/1995",
    },
    {
      id: 4,
      name: "Harry Singh",
      email: "sagar@xyz.com",
      phone: "7859866674",
      commission: "9.00%",
      salary: "₹ 1,xx,xxx",
      expense: "₹ 1,xxx",
      birthdate: "16/12/1995",
    },
  ];

  // ================= SEARCH FILTER LOGIC =================
  const filteredEmployees = useMemo(() => {
    if (!searchInput) return employees;

    return employees.filter((emp) =>
      Object.values(emp)
        .join(" ")
        .toLowerCase()
        .includes(searchInput.toLowerCase())
    );
  }, [searchInput, employees]);

  return (
    <div className="relative">
      {/* ================= TOP BAR ================= */}
      <div className="relative top-[30px] left-[125px] w-[1350px] h-[70px] flex items-center justify-between px-[35px] rounded-[10px] border border-[#003B67]">
        <p className="font-bold text-[22px]">Employee Registration</p>

        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 rounded-lg border-2 border-[#FA9C42] hover:bg-[#FA9C42] hover:text-white"
        >
          <span className="text-[16px] font-bold text-[#FA9C42]">+</span>{" "}
          Add Employee
        </button>
      </div>

      {/* ================= TABLE ================= */}
      <div className="relative top-[60px] left-[125px] w-[1350px]">
        {/* Table Header */}
        <div className="grid grid-cols-[1.2fr_1.5fr_1.2fr_1fr_1fr_1fr_1.2fr_1.5fr] bg-[#FA9C42] text-white rounded-lg px-6 py-4">
          <div>Name</div>
          <div>Email</div>
          <div>Phone</div>
          <div>Commission</div>
          <div>Salary</div>
          <div>Expense</div>
          <div>Birthdate</div>
          <div className="pl-[40px]">Actions</div>
        </div>

        {/* Table Rows */}
        {filteredEmployees.map((emp) => (
          <div
            key={emp.id}
            className="grid grid-cols-[1.2fr_1.5fr_1.2fr_1fr_1fr_1fr_1.2fr_1.5fr] items-center px-6 py-4 border-b border-[#F1C08B]"
          >
            <div>{emp.name}</div>
            <div>{emp.email}</div>
            <div>{emp.phone}</div>
            <div>{emp.commission}</div>
            <div>{emp.salary}</div>
            <div>{emp.expense}</div>
            <div>{emp.birthdate}</div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setSelectedEmployee(emp);
                  setShowRating(true);
                }}
                className="px-4 py-1.5 rounded-lg border-2 border-[#FA9C42] hover:bg-[#FA9C42] hover:text-white"
              >
                Rating
              </button>

              <button
                onClick={() => {
                  setSelectedEmployee(emp);
                  setShowFeedback(true);
                }}
                className="px-4 py-1.5 rounded-lg border-2 border-[#FA9C42] hover:bg-[#FA9C42] hover:text-white"
              >
                Feedback
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODALS ================= */}
      {showForm && <ERForm onClosed={() => setShowForm(false)} />}

      {showRating && (
        <Rating
          employee={selectedEmployee}
          onClose={() => setShowRating(false)}
        />
      )}

      {showFeedback && (
        <Feedback
          employee={selectedEmployee}
          onClose={() => setShowFeedback(false)}
        />
      )}
    </div>
  );
}

export default ER;














// import React, { useState } from "react";
// import ERForm from "./ERForm";
// import Rating from "./Rating";
// import Feedback from "./Feedback";

// function ER() {
//   // Add Employee modal
//   const [showForm, setShowForm] = useState(false);

//   // Rating popup
//   const [showRating, setShowRating] = useState(false);

//   // Feedback popup
//   const [showFeedback, setShowFeedback] = useState(false);

//   // Selected employee
//   const [selectedEmployee, setSelectedEmployee] = useState(null);

//   // Dummy employee data
//   const employees = [
//     {
//       id: 1,
//       name: "Sunny Gupta",
//       email: "sagar@xyz.com",
//       phone: "7859866674",
//       commission: "9.00%",
//       salary: "₹ 1,xx,xxx",
//       expense: "₹ 1,xxx",
//       birthdate: "16/12/1995",
//     },
//     {
//       id: 2,
//       name: "Tanmay Rote",
//       email: "sagar@xyz.com",
//       phone: "7859866674",
//       commission: "9.00%",
//       salary: "₹ 1,xx,xxx",
//       expense: "₹ 1,xxx",
//       birthdate: "16/12/1995",
//     },
//     {
//       id: 3,
//       name: "Tejas Derle",
//       email: "sagar@xyz.com",
//       phone: "7859866674",
//       commission: "9.00%",
//       salary: "₹ 1,xx,xxx",
//       expense: "₹ 1,xxx",
//       birthdate: "16/12/1995",
//     },
//     {
//       id: 4,
//       name: "Harry Singh",
//       email: "sagar@xyz.com",
//       phone: "7859866674",
//       commission: "9.00%",
//       salary: "₹ 1,xx,xxx",
//       expense: "₹ 1,xxx",
//       birthdate: "16/12/1995",
//     },
//   ];

//   return (
//     <div className="relative">
//       {/* ================= TOP BAR ================= */}
//       <div className="relative top-[30px] left-[125px] w-[1350px] h-[70px] flex items-center justify-between px-[35px] rounded-[10px] border border-[#003B67]">
//         <p className="font-bold text-[22px]">Employee Registration</p>

//         <button
//           onClick={() => setShowForm(true)}
//           className="px-4 py-2 rounded-lg border-2 border-[#FA9C42] hover:bg-[#FA9C42] hover:text-white"
//         >
//           <span className="text-[16px] font-bold text-[#FA9C42]">+</span>{" "}
//           Add Employee
//         </button>
//       </div>

//       {/* ================= TABLE ================= */}
//       <div className="relative top-[60px] left-[125px] w-[1350px]">
//         {/* Table Header */}
//         <div className="grid grid-cols-[1.2fr_1.5fr_1.2fr_1fr_1fr_1fr_1.2fr_1.5fr] bg-[#FA9C42] text-white rounded-lg px-6 py-4">
//           <div>Name</div>
//           <div>Email</div>
//           <div>Phone</div>
//           <div>Commission</div>
//           <div>Salary</div>
//           <div>Expense</div>
//           <div>Birthdate</div>
//           <div className="pl-[40px]">Actions</div>
//         </div>

//         {/* Table Rows */}
//         {employees.map((emp) => (
//           <div
//             key={emp.id}
//             className="grid grid-cols-[1.2fr_1.5fr_1.2fr_1fr_1fr_1fr_1.2fr_1.5fr] items-center px-6 py-4 border-b border-[#F1C08B]"
//           >
//             <div>{emp.name}</div>
//             <div>{emp.email}</div>
//             <div>{emp.phone}</div>
//             <div>{emp.commission}</div>
//             <div>{emp.salary}</div>
//             <div>{emp.expense}</div>
//             <div>{emp.birthdate}</div>

//             {/* Actions */}
//             <div className="flex gap-3">
//               <button
//                 onClick={() => {
//                   setSelectedEmployee(emp);
//                   setShowRating(true);
//                 }}
//                 className="px-4 py-1.5 rounded-lg border-2 border-[#FA9C42] hover:bg-[#FA9C42] hover:text-white"
//               >
//                 Rating
//               </button>

//               <button
//                 onClick={() => {
//                   setSelectedEmployee(emp);
//                   setShowFeedback(true);
//                 }}
//                 className="px-4 py-1.5 rounded-lg border-2 border-[#FA9C42] hover:bg-[#FA9C42] hover:text-white"
//               >
//                 Feedback
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ================= MODALS ================= */}
//       {showForm && <ERForm onClosed={() => setShowForm(false)} />}

//       {showRating && (
//         <Rating
//           employee={selectedEmployee}
//           onClose={() => setShowRating(false)}
//         />
//       )}

//       {showFeedback && (
//         <Feedback
//           employee={selectedEmployee}
//           onClose={() => setShowFeedback(false)}
//         />
//       )}
//     </div>
//   );
// }

// export default ER;
