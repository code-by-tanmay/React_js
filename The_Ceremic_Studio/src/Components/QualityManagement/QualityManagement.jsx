import React, { useState } from "react";
import AddQuality from "./AddQuality";
import EditQualityManagement from "./EditQualityManagement";

function QualityManagement() {
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const [qualities, setQualities] = useState([
    { id: 1, name: "Sunny Gupta", enabled: false },
    { id: 2, name: "Tanmay Rote", enabled: true },
    { id: 3, name: "Tejas Derle", enabled: false },
    { id: 4, name: "Harry Singh", enabled: true },
  ]);

  const toggleStatus = (id) => {
    setQualities((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  const saveEdit = (updatedItem) => {
    setQualities((prev) =>
      prev.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
    setEditItem(null);
  };

  // ✅ DELETE FUNCTION (NEW)
  const deleteQuality = (id) => {
    setQualities((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="relative">

      {/* Top Bar */}
      <div className="relative top-[30px] left-[125px] w-[1350px] h-[70px] flex items-center justify-between px-[35px] rounded-[10px] border border-[#003B67]">
        <p className="font-bold text-[22px]">Quality Management</p>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 rounded-lg border-2 border-[#FA9C42] hover:bg-[#FA9C42] hover:text-white"
        >
          <span className="text-[16px] font-bold text-[#FA9C42]">+</span>
          Add Quality
        </button>
      </div>

      {/* Table */}
      <div className="relative top-[60px] left-[125px] w-[1350px]">
        <div className="grid grid-cols-[2fr_1fr_1fr] bg-[#FA9C42] text-white rounded-lg px-6 py-4">
          <div>Quality Name</div>
          <div>Status</div>
          <div className="text-center">Actions</div>
        </div>

        {qualities.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-[2fr_1fr_1fr] items-center px-6 py-4 border-b border-[#F1C08B]"
          >
            <div>{item.name}</div>

            <div
              onClick={() => toggleStatus(item.id)}
              className={`w-[44px] h-[22px] flex items-center rounded-full cursor-pointer
                ${item.enabled ? "bg-green-500" : "bg-gray-300"}
              `}
            >
              <div
                className={`w-[18px] h-[18px] bg-white rounded-full transition
                  ${item.enabled ? "translate-x-[22px]" : "translate-x-[2px]"}
                `}
              />
            </div>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => setEditItem(item)}
                className="px-4 py-1.5 rounded-lg border-2 border-[#FA9C42]  border-[#FA9C42] hover:bg-[#FA9C42] hover:text-white"
              >
                Edit
              </button>

              {/* ✅ DELETE BUTTON UPDATED */}
              <button
                onClick={() => deleteQuality(item.id)}
                className="px-4 py-1.5 rounded-lg border-2 border-red-400 text-red-500  border-[#FA9C42] hover:bg-[#FA9C42] hover:text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showForm && <AddQuality onClose={() => setShowForm(false)} />}

      {editItem && (
        <EditQualityManagement
          quality={editItem}
          onClose={() => setEditItem(null)}
          onSave={saveEdit}
        />
      )}
    </div>
  );
}

export default QualityManagement;
