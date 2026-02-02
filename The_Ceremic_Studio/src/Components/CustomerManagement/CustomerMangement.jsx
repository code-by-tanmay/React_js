import React, { useEffect, useState } from "react";
import axios from "axios";
import AddCustomer from "./AddCustomer";
import EditCustomer from "./EditCustomer";

function CustomerManagement() {
  // ================= STATE =================
  const [usersData, setUserData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // ================= API ENDPOINTS =================
  const listApi = "http://dashboard.theceramicstudio.in/api/employees/list";
  const deleteApi = "http://dashboard.theceramicstudio.in/api/employees/delete";

  // ================= FETCH CUSTOMER LIST =================
  const fetchUsers = () => {
    axios
      .get(listApi)
      .then((res) => {
        setUserData(res.data.employees || []);
      })
      .catch((err) => {
        console.error("API ERROR:", err);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ================= DELETE CUSTOMER =================
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`${deleteApi}/${id}`);
      fetchUsers();
    } catch (err) {
      console.error("DELETE ERROR:", err);
    }
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
        <AddCustomer
          onClose={() => setShowForm(false)}
          refreshList={fetchUsers}
        />
      )}

      {/* ================= EDIT CUSTOMER MODAL ================= */}
      {showEditForm && selectedCustomer && (
        <EditCustomer
          customer={selectedCustomer}
          onClose={() => setShowEditForm(false)}
          refreshList={fetchUsers}
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
        {usersData.map((user) => (
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

            {/* Action Buttons */}
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
// import GroupIcon from "../Images/Group.png";

// function CustomerManagement() {
//   const [usersData, setUserData] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [selectedCustomer, setSelectedCustomer] = useState(null);

//   const listApi = "https://dashboard.theceramicstudio.in/api/employees/list";
//   const addApi = "https://dashboard.theceramicstudio.in/api/employees/add";
//   const deleteApi = "https://dashboard.theceramicstudio.in/api/employees/delete";

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

//   // ================= ADD CUSTOMER =================
//   const AddCustomer = ({ onClose }) => {
//     const [product, setProduct] = useState({
//       name: "",
//       email: "",
//       phone: "",
//       commission: "",
//       birthdate: "",
//       expense: "",
//       status: "active",
//     });

//     function handleChange(e) {
//       setProduct({ ...product, [e.target.name]: e.target.value });
//     }

//     const handleSubmit = async (e) => {
//       debugger
//       e.preventDefault();
//       try {
//         const response = await axios.post(addApi, {
//           ...product,
//           commission: Number(product.commission),
//           expense: Number(product.expense),
//         });

//         console.log("Customer Added:", response.data);
//         alert("Customer Added Successfully!");
//         fetchUsers(); // refresh table
//         onClose(); // close modal

//         setProduct({
//           name: "",
//           email: "",
//           phone: "",
//           commission: "",
//           birthdate: "",
//           expense: "",
//           status: "active",
//         });
//       } catch (err) {
//         console.error("ADD CUSTOMER ERROR:", err.message);
//         alert("Error while adding customer");
//       }
//     };

//     return (
//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
//         <div className="w-[600px] rounded-2xl bg-[#FFF6ED] p-6">
//           {/* Header */}
//           <div className="flex items-center gap-2 mb-4">
//             <img src={GroupIcon} alt="icon" className="w-6 h-6" />
//             <h2 className="text-xl font-bold">Add Customer</h2>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
//             <input
//               name="name"
//               placeholder="Name"
//               value={product.name}
//               onChange={handleChange}
//               required
//               className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none"
//             />

//             <input
//               name="email"
//               placeholder="Email"
//               value={product.email}
//               onChange={handleChange}
//               required
//               className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none"
//             />

//             <input
//               name="phone"
//               placeholder="Phone"
//               value={product.phone}
//               onChange={handleChange}
//               required
//               className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none"
//             />

//             <input
//               name="commission"
//               placeholder="Commission"
//               value={product.commission}
//               onChange={handleChange}
//               required
//               className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none"
//             />

//             <input
//               type="date"
//               name="birthdate"
//               value={product.birthdate}
//               onChange={handleChange}
//               required
//               className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none"
//             />

//             <input
//               name="expense"
//               placeholder="Expense"
//               value={product.expense}
//               onChange={handleChange}
//               required
//               className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none"
//             />

//             <select
//               name="status"
//               value={product.status}
//               onChange={handleChange}
//               className="col-span-2 w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none"
//             >
//               <option value="active">Active</option>
//               <option value="inactive">Inactive</option>
//             </select>

//             <div className="col-span-2 flex justify-end gap-3">
//               <button type="button" onClick={onClose}>
//                 Cancel
//               </button>

//               <button
//                 type="submit"
//                 className="bg-[#FA9C42] px-4 py-2 text-white rounded"
//               >
//                 Save
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
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
//           + Add Customer
//         </button>
//       </div>

//       {/* ================= ADD CUSTOMER ================= */}
//       {showForm && <AddCustomer onClose={() => setShowForm(false)} />}

//       {/* ================= EDIT CUSTOMER ================= */}
//       {showEditForm && selectedCustomer && (
//         <EditCustomer
//           customer={selectedCustomer}
//           onClose={() => setShowEditForm(false)}
//           refreshList={fetchUsers}
//         />
//       )}

//       {/* ================= TABLE ================= */}
//       <div className="relative top-[60px] left-[125px] w-[1350px] p-4 bg-white rounded-[12px]">
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

//         {usersData.map((user) => (
//           <div
//             key={user.id}
//             className="grid grid-cols-8 px-6 py-3 border-b text-sm"
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

//             <div className="flex justify-center gap-4">
//               <button onClick={() => handleEditClick(user)}>✏️</button>
//               <button
//                 onClick={() => handleDelete(user.id)}
//                 className="text-red-500"
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
