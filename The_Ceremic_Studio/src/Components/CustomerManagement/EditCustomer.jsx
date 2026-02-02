import React, { useState } from "react";
import axios from "axios";
import GroupIcon from "../../Images/Group.png";

function EditCustomer({ customer, onClose, refreshList }) {
  // ================= INITIALIZE FORM DATA =================
  const [formData, setFormData] = useState({
    name: customer.name || "",
    email: customer.email || "",
    phone: customer.phone || "",
    commission: customer.commission || "",
    birthdate: customer.birthdate ? customer.birthdate.split("T")[0] : "", // format for input type=date
    expense: customer.expense || "",
    status: customer.status === "active" ? "active" : "inactive", // fixed initialization
  });

  const updateApi = `http://dashboard.theceramicstudio.in/api/employees/update/${customer.id}`;

  // ================= HANDLE INPUT CHANGE =================
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ================= HANDLE UPDATE =================
  const handleSubmit = async () => {
    const confirmEdit = window.confirm(
      "Are you sure you want to edit this customer?"
    );
    if (!confirmEdit) return;

    // ✅ Send status as string (active/inactive)
    const payload = { ...formData };

    try {
      await axios.put(updateApi, payload);
      refreshList(); // refresh parent list
      onClose(); // close modal
    } catch (error) {
      console.error("UPDATE ERROR:", error);
      alert("Update failed. Check console.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50">
      <div className="absolute top-1/2 left-[125px] right-0 flex justify-center -translate-y-1/2">
        <div className="bg-white w-[500px] p-6 rounded-xl shadow-lg">
          
          {/* HEADER */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <img src={GroupIcon} alt="icon" className="w-6 h-6" />
              <h2 className="text-xl font-bold">Edit Customer</h2>
            </div>
            <button onClick={onClose} className="cursor-pointer bg-transparent text-[22px] font-bold text-red-500 hover:opacity-30"
>✖</button>
          </div>

          {/* FORM */}
          <div className="space-y-3">
            <input
              name="name"
               className="w-full mb-4 px-4 py-3 rounded-[10px] border border-[#FA9C42] focus:outline-none"
              value={formData.name}
              onChange={handleChange}
             
              placeholder="Name"
            />

            <input
              name="email"
              className="w-full mb-4 px-4 py-3 rounded-[10px] border border-[#FA9C42] focus:outline-none"
              value={formData.email}
              onChange={handleChange}
             
              placeholder="Email"
            />

            <input
              name="phone"
              className="w-full mb-4 px-4 py-3 rounded-[10px] border border-[#FA9C42] focus:outline-none"
              value={formData.phone}
              onChange={handleChange}
              
              placeholder="Phone"
            />

            <input
              name="commission"
               className="w-full mb-4 px-4 py-3 rounded-[10px] border border-[#FA9C42] focus:outline-none"
              value={formData.commission}
              onChange={handleChange}
            
              placeholder="Commission"
            />

            <input
              type="date"
               className="w-full mb-4 px-4 py-3 rounded-[10px] border border-[#FA9C42] focus:outline-none"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              
            />

            <input
              name="expense"
               className="w-full mb-4 px-4 py-3 rounded-[10px] border border-[#FA9C42] focus:outline-none"
              value={formData.expense}
              onChange={handleChange}
            
              placeholder="Expense"
            />

            {/* STATUS SELECT */}
            <select
              name="status"
               className="w-full mb-4 px-4 py-3 rounded-[10px] border border-[#FA9C42] focus:outline-none"
              value={formData.status}
              onChange={handleChange}
              
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* ACTIONS */}
          <div className="flex justify-end gap-3 mt-5">
            <button onClick={onClose} className="px-4 py-2 hover:bg-[#FA9C42] hover:text-white">
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-[#FA9C42] text-white"
            >
              Save
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default EditCustomer;
