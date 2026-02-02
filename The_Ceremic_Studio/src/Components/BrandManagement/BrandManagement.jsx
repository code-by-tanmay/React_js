import React, { useState } from "react";
import AddBrandManagement from "./AddBrandManagement";
import EditBrandManagement from "./EditBrandManagement";

function BrandManagement() {
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);

  // ================= BRAND DATA =================
  const [categories, setCategories] = useState([
    { id: 1, name: "Brand 1", enabled: true },
    { id: 2, name: "Brand 1", enabled: true },
    { id: 3, name: "Brand 1", enabled: true },
    { id: 4, name: "Brand 1", enabled: true },
  ]);

  // ================= STATUS BUTTON TOGGLE =================
  const toggleStatus = (id) => {
    setCategories((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  // ================= SAVE EDIT =================
  const saveEdit = (updatedItem) => {
    setCategories((prev) =>
      prev.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
    setEditItem(null);
  };

  // ================= DELETE =================
  const deleteCategory = (id) => {
    setCategories((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      {/* ================= TOP BAR ================= */}
      <div className="relative top-[30px] left-[125px] w-[1350px] h-[70px] flex items-center justify-between px-[35px] rounded-[10px] border border-[#003B67]">
        <p className="font-bold text-[22px]">Brand Management</p>

        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 rounded-lg border-2 border-[#FA9C42] hover:bg-[#FA9C42] hover:text-white transition"
        >
          <span className="text-[16px] font-bold text-[#FA9C42]">+</span>
          Add Brand
        </button>
      </div>

      {/* ================= TABLE ================= */}
      <div className="relative top-[60px] left-[125px] w-[1350px]">
        {/* ===== TABLE HEADER ===== */}
        <div className="grid grid-cols-[2fr_1fr_1fr] bg-[#FA9C42] text-white rounded-lg px-6 py-4 font-medium">
          <div>Brand Name</div>
          <div className="pl-[25px]">Status</div>
          <div className="text-center">Actions</div>
        </div>

        {/* ===== TABLE ROWS ===== */}
        {categories.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-[2fr_1fr_1fr] items-center px-6 py-4 border-b border-[#F1C08B]"
          >
            {/* Brand Name */}
            <div>{item.name}</div>

            {/* STATUS BUTTON (UPDATED) */}
            <div>
              <button
                onClick={() => toggleStatus(item.id)}
                className={`px-4 py-[4px] rounded-md border text-sm font-medium transition 
                  ${
                    item.enabled
                      ? "text-[#15B700] border-green-[#15B700]"
                      : "text-red-500 border-red-500"
                  }
                `}
              >
                {item.enabled ? "Available" : "Unavailable"}
              </button>
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setEditItem(item)}
                className="text-black hover:opacity-70"
              >
                ✏️
              </button>

              <button
                onClick={() => deleteCategory(item.id)}
                className="text-red-500 hover:opacity-70"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= ADD POPUP ================= */}
      {showForm && (
        <AddBrandManagement onClose={() => setShowForm(false)} />
      )}

      {/* ================= EDIT POPUP ================= */}
      {editItem && (
        <EditBrandManagement
          quality={editItem}
          onClose={() => setEditItem(null)}
          onSave={saveEdit}
        />
      )}
    </div>
  );
}

export default BrandManagement;
