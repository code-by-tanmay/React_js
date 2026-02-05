import React, { useEffect, useState, useContext, useMemo } from "react";
import AddCustomer from "./AddCustomer";
import EditCustomer from "./EditCustomer";
import { SearchContext } from "../../Context/SearchContext";

function CustomerManagement() {
  // ================= STATE =================
  const [usersData, setUserData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // ✅ GLOBAL SEARCH VALUE
  const { searchInput } = useContext(SearchContext);

  // ================= DUMMY CUSTOMER DATA =================
  const dummyCustomers = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "9876543210",
      commission: 10,
      birthdate: "1995-04-12",
      expense: 2500,
      status: "active",
    },
    {
      id: 2,
      name: "Sneha Patil",
      email: "sneha@gmail.com",
      phone: "9822334455",
      commission: 12,
      birthdate: "1998-09-20",
      expense: 1800,
      status: "inactive",
    },
    {
      id: 3,
      name: "Amit Verma",
      email: "amit@gmail.com",
      phone: "9011223344",
      commission: 8,
      birthdate: "1992-01-05",
      expense: 3200,
      status: "active",
    },
    {
      id: 4,
      name: "Pooja Singh",
      email: "pooja@gmail.com",
      phone: "9900112233",
      commission: 15,
      birthdate: "1996-07-18",
      expense: 4000,
      status: "active",
    },
    {
      id: 5,
      name: "Karan Deshmukh",
      email: "karan@gmail.com",
      phone: "9988776655",
      commission: 9,
      birthdate: "1994-11-30",
      expense: 2100,
      status: "inactive",
    },
  ];

  // ================= LOAD DATA ON PAGE LOAD =================
  useEffect(() => {
    setUserData(dummyCustomers);
  }, []);

  // ================= SEARCH FILTER LOGIC =================
  const filteredUsers = useMemo(() => {
    if (!searchInput) return usersData;

    return usersData.filter((user) =>
      Object.values(user)
        .join(" ")
        .toLowerCase()
        .includes(searchInput.toLowerCase())
    );
  }, [searchInput, usersData]);

  // ================= DELETE CUSTOMER =================
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );
    if (!confirmDelete) return;

    const updatedList = usersData.filter((user) => user.id !== id);
    setUserData(updatedList);
  };

  // ================= EDIT CUSTOMER =================
  const handleEditClick = (user) => {
    setSelectedCustomer(user);
    setShowEditForm(true);
  };

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="relative top-[30px] left-[125px] w-[1350px] h-[70px] flex items-center justify-between px-[35px] rounded-[10px] border border-[#003B67] bg-white">
        <p className="font-bold text-[22px]">
          Customer Relationship Management (CRM)
        </p>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-[#FA9C42] hover:bg-[#FA9C42] hover:text-white transition"
        >
          <span className="text-[16px] font-bold text-[#FA9C42]">+</span>
          Add Customer
        </button>
      </div>

      {/* ================= ADD CUSTOMER MODAL ================= */}
      {showForm && (
        <AddCustomer onClose={() => setShowForm(false)} refreshList={() => {}} />
      )}

      {/* ================= EDIT CUSTOMER MODAL ================= */}
      {showEditForm && selectedCustomer && (
        <EditCustomer
          customer={selectedCustomer}
          onClose={() => setShowEditForm(false)}
          refreshList={() => {}}
        />
      )}

      {/* ================= CUSTOMER TABLE ================= */}
      <div className="relative top-[60px] left-[125px] w-[1350px] p-4 bg-white rounded-[12px]">
        {/* Table Header */}
        <div className="grid grid-cols-8 bg-[#FA9C42] text-white px-6 py-4 rounded-lg">
          <div>Name</div>
          <div>Email</div>
          <div>Phone</div>
          <div>Commission</div>
          <div>Birth Date</div>
          <div>Expense</div>
          <div>Status</div>
          <div className="text-center">Action</div>
        </div>

        {/* Table Rows */}
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="grid grid-cols-8 px-6 py-3 border-b text-sm items-center border-[#F1C08B]"
          >
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
            <div>{user.commission}</div>
            <div>
              {user.birthdate
                ? new Date(user.birthdate).toLocaleDateString()
                : "-"}
            </div>
            <div>{user.expense}</div>
            <div>{user.status}</div>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleEditClick(user)}
                className="hover:opacity-70"
              >
                ✏️
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="text-red-500 hover:opacity-70"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CustomerManagement;








// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import AddCustomer from "./AddCustomer";
// import EditCustomer from "./EditCustomer";

// function CustomerManagement() {
//   // ================= STATE =================
//   const [usersData, setUserData] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [selectedCustomer, setSelectedCustomer] = useState(null);

//   // ================= API ENDPOINTS =================
//   const listApi = "http://dashboard.theceramicstudio.in/api/employees/list";
//   const deleteApi = "http://dashboard.theceramicstudio.in/api/employees/delete";

//   // ================= FETCH CUSTOMER LIST =================
//   const fetchUsers = () => {
//     axios
//       .get(listApi)
//       .then((res) => {
//         setUserData(res.data.employees || []);
//       })
//       .catch((err) => {
//         console.error("API ERROR:", err);
//       });
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   // ================= DELETE CUSTOMER =================
//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this customer?"
//     );
//     if (!confirmDelete) return;

//     try {
//       await axios.delete(`${deleteApi}/${id}`);
//       fetchUsers();
//     } catch (err) {
//       console.error("DELETE ERROR:", err);
//     }
//   };

//   // ================= EDIT CUSTOMER =================
//   const handleEditClick = (user) => {
//     setSelectedCustomer(user);
//     setShowEditForm(true);
//   };

//   return (
//     <>
//       {/* ================= TOP BAR ================= */}
//       <div className="relative top-[30px] left-[125px] w-[1350px] h-[70px] flex items-center justify-between px-[35px] rounded-[10px] border border-[#003B67] bg-white">
//         <p className="font-bold text-[22px]">
//           Customer Relationship Management (CRM)
//         </p>
//         <button
//           onClick={() => setShowForm(true)}
//           className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-[#FA9C42] hover:bg-[#FA9C42] hover:text-white transition"
//         >
//           <span className="text-[16px] font-bold text-[#FA9C42]">+</span>
//           Add Customer
//         </button>
//       </div>

//       {/* ================= ADD CUSTOMER MODAL ================= */}
//       {showForm && (
//         <AddCustomer
//           onClose={() => setShowForm(false)}
//           refreshList={fetchUsers}
//         />
//       )}

//       {/* ================= EDIT CUSTOMER MODAL ================= */}
//       {showEditForm && selectedCustomer && (
//         <EditCustomer
//           customer={selectedCustomer}
//           onClose={() => setShowEditForm(false)}
//           refreshList={fetchUsers}
//         />
//       )}

//       {/* ================= CUSTOMER TABLE ================= */}
//       <div className="relative top-[60px] left-[125px] w-[1350px] p-4 bg-white rounded-[12px]">
//         {/* Table Header */}
//         <div className="grid grid-cols-8 bg-[#FA9C42] text-white px-6 py-4 rounded-lg">
//           <div>Name</div>
//           <div>Email</div>
//           <div>Phone</div>
//           <div>Commission</div>
//           <div>Birth Date</div>
//           <div>Expense</div>
//           <div>Status</div>
//           <div className="text-center">Action</div>
//         </div>

//         {/* Table Rows */}
//         {usersData.map((user) => (
//           <div
//             key={user.id}
//             className="grid grid-cols-8 px-6 py-3 border-b text-sm items-center border-[#F1C08B]"
//           >
//             <div>{user.name}</div>
//             <div>{user.email}</div>
//             <div>{user.phone}</div>
//             <div>{user.commission}</div>
//             <div>
//               {user.birthdate
//                 ? new Date(user.birthdate).toLocaleDateString()
//                 : "-"}
//             </div>
//             <div>{user.expense}</div>
//             <div>{user.status}</div>

//             {/* Action Buttons */}
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={() => handleEditClick(user)}
//                 className="hover:opacity-70"
//               >
//                 ✏️
//               </button>
//               <button
//                 onClick={() => handleDelete(user.id)}
//                 className="text-red-500 hover:opacity-70"
//               >
//                 🗑️
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default CustomerManagement;




// import React, { useEffect, useState } from "react";
// import AddCustomer from "./AddCustomer";
// import EditCustomer from "./EditCustomer";

// function CustomerManagement() {
//   // ================= STATE =================
//   const [usersData, setUserData] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [selectedCustomer, setSelectedCustomer] = useState(null);

//   // ================= DUMMY CUSTOMER DATA =================
//   const dummyCustomers = [
//     {
//       id: 1,
//       name: "Rahul Sharma",
//       email: "rahul@gmail.com",
//       phone: "9876543210",
//       commission: 10,
//       birthdate: "1995-04-12",
//       expense: 2500,
//       status: "active",
//     },
//     {
//       id: 2,
//       name: "Sneha Patil",
//       email: "sneha@gmail.com",
//       phone: "9822334455",
//       commission: 12,
//       birthdate: "1998-09-20",
//       expense: 1800,
//       status: "inactive",
//     },
//     {
//       id: 3,
//       name: "Amit Verma",
//       email: "amit@gmail.com",
//       phone: "9011223344",
//       commission: 8,
//       birthdate: "1992-01-05",
//       expense: 3200,
//       status: "active",
//     },
//     {
//       id: 4,
//       name: "Pooja Singh",
//       email: "pooja@gmail.com",
//       phone: "9900112233",
//       commission: 15,
//       birthdate: "1996-07-18",
//       expense: 4000,
//       status: "active",
//     },
//     {
//       id: 5,
//       name: "Karan Deshmukh",
//       email: "karan@gmail.com",
//       phone: "9988776655",
//       commission: 9,
//       birthdate: "1994-11-30",
//       expense: 2100,
//       status: "inactive",
//     },
//   ];

//   // ================= LOAD DATA ON PAGE LOAD =================
//   useEffect(() => {
//     setUserData(dummyCustomers);
//   }, []);

//   // ================= DELETE CUSTOMER (LOCAL) =================
//   const handleDelete = (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this customer?"
//     );
//     if (!confirmDelete) return;

//     const updatedList = usersData.filter((user) => user.id !== id);
//     setUserData(updatedList);
//   };

//   // ================= EDIT CUSTOMER =================
//   const handleEditClick = (user) => {
//     setSelectedCustomer(user);
//     setShowEditForm(true);
//   };

//   return (
//     <>
//       {/* ================= TOP BAR ================= */}
//       <div className="relative top-[30px] left-[125px] w-[1350px] h-[70px] flex items-center justify-between px-[35px] rounded-[10px] border border-[#003B67] bg-white">
//         <p className="font-bold text-[22px]">
//           Customer Relationship Management (CRM)
//         </p>
//         <button
//           onClick={() => setShowForm(true)}
//           className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-[#FA9C42] hover:bg-[#FA9C42] hover:text-white transition"
//         >
//           <span className="text-[16px] font-bold text-[#FA9C42]">+</span>
//           Add Customer
//         </button>
//       </div>

//       {/* ================= ADD CUSTOMER MODAL ================= */}
//       {showForm && (
//         <AddCustomer
//           onClose={() => setShowForm(false)}
//           refreshList={() => {}}
//         />
//       )}

//       {/* ================= EDIT CUSTOMER MODAL ================= */}
//       {showEditForm && selectedCustomer && (
//         <EditCustomer
//           customer={selectedCustomer}
//           onClose={() => setShowEditForm(false)}
//           refreshList={() => {}}
//         />
//       )}

//       {/* ================= CUSTOMER TABLE ================= */}
//       <div className="relative top-[60px] left-[125px] w-[1350px] p-4 bg-white rounded-[12px]">
//         {/* Table Header */}
//         <div className="grid grid-cols-8 bg-[#FA9C42] text-white px-6 py-4 rounded-lg">
//           <div>Name</div>
//           <div>Email</div>
//           <div>Phone</div>
//           <div>Commission</div>
//           <div>Birth Date</div>
//           <div>Expense</div>
//           <div>Status</div>
//           <div className="text-center">Action</div>
//         </div>

//         {/* Table Rows */}
//         {usersData.map((user) => (
//           <div
//             key={user.id}
//             className="grid grid-cols-8 px-6 py-3 border-b text-sm items-center border-[#F1C08B]"
//           >
//             <div>{user.name}</div>
//             <div>{user.email}</div>
//             <div>{user.phone}</div>
//             <div>{user.commission}</div>
//             <div>
//               {user.birthdate
//                 ? new Date(user.birthdate).toLocaleDateString()
//                 : "-"}
//             </div>
//             <div>{user.expense}</div>
//             <div>{user.status}</div>

//             {/* Action Buttons */}
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={() => handleEditClick(user)}
//                 className="hover:opacity-70"
//               >
//                 ✏️
//               </button>
//               <button
//                 onClick={() => handleDelete(user.id)}
//                 className="text-red-500 hover:opacity-70"
//               >
//                 🗑️
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default CustomerManagement;


