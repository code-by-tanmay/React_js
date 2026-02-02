import React, { useState } from "react";
import GroupIcon from "../../Images/Group.png";

function AddCustomer({ onClose, refreshList }) {
  const [product, setProduct] = useState({
    name: "",
    email: "",
    phone: "",
    commission: "",
    birthdate: "",
    expense: "",
    status: "active",
  });

  // handle input change
  function handleChange(e) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  }

  // handle form submit using fetch
  async function handleSubmit(e) {
    e.preventDefault();
debugger
    try {
      const response = await fetch(
        "https://dashboard.theceramicstudio.in//api/employees/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...product,
            expense: Number(product.expense),
            commission: Number(product.commission),
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Customer Added:", data);

      alert("Customer Added Successfully!");
      refreshList(); // refresh table
      onClose();     // close modal

      // reset form
      setProduct({
        name: "",
        email: "",
        phone: "",
        commission: "",
        birthdate: "",
        expense: "",
        status: "active",
      });

    } catch (err) {
      console.error("ADD CUSTOMER ERROR:", err.message);
      alert("Error while adding customer");
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[600px] rounded-2xl bg-[#FFF6ED] p-6">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <img src={GroupIcon} alt="icon" className="w-6 h-6" />
          <h2 className="text-xl font-bold">Add Customer</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <input
            name="name"
            placeholder="Name"
            value={product.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none"
          />

          <input
            name="email"
            placeholder="Email"
            value={product.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none"
          />

          <input
            name="phone"
            placeholder="Phone"
            value={product.phone}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none"
          />

          <input
            name="commission"
            placeholder="Commission"
            value={product.commission}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none"
          />

          <input
            type="date"
            name="birthdate"
            value={product.birthdate}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none"
          />

          <input
            name="expense"
            placeholder="Expense"
            value={product.expense}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none"
          />

          <select
            name="status"
            value={product.status}
            onChange={handleChange}
            className="col-span-2 w-full rounded-lg border border-[#FA9C42] bg-transparent p-2.5 outline-none"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          {/* Actions */}
          <div className="col-span-2 flex justify-end gap-3 ">
            <button type="button" onClick={onClose} className="px-4 py-2 hover:bg-[#FA9C42] hover:text-white ">
              Cancel
            </button>

            <button
              type="submit"
              className="bg-[#FA9C42] px-4 py-2 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCustomer;
