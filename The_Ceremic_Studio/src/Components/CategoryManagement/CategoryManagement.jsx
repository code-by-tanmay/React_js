import React, { useState, useContext } from "react";
import AddCategory from "./AddCategory";
import EditCategoryManagement from "./EditCategoryManagement";
import { SearchContext } from "../../Context/SearchContext";

function CategoryManagement() {
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);

  // 🔍 SEARCH CONTEXT (LOGIC ONLY)
  const { searchInput } = useContext(SearchContext);

  // ================= CATEGORY DATA =================
  const [categories, setCategories] = useState([
    { id: 1, name: "Admin", enabled: true },
    { id: 2, name: "Admin", enabled: true },
    { id: 3, name: "Admin", enabled: true },
    { id: 4, name: "Admin", enabled: true },
  ]);

  // ================= TOGGLE STATUS =================
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

  // ================= DELETE CATEGORY =================
  const deleteCategory = (id) => {
    setCategories((prev) => prev.filter((item) => item.id !== id));
  };

  // 🔍 SEARCH FILTER (ONLY NEW LOGIC)
  const filteredCategories = categories.filter((item) =>
    item.name.toLowerCase().includes((searchInput || "").toLowerCase())
  );

  return (
    <div>
      {/* ================= TOP BAR ================= */}
      <div className="relative top-[30px] left-[125px] w-[1350px] h-[70px] flex items-center justify-between px-[35px] rounded-[10px] border border-[#003B67]">
        <p className="font-bold text-[22px]">Category Management</p>

        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 rounded-lg border-2 border-[#FA9C42] hover:bg-[#FA9C42] hover:text-white transition"
        >
          <span className="text-[16px] font-bold text-[#FA9C42]">+</span>
          Add Category
        </button>
      </div>

      {/* ================= TABLE ================= */}
      <div className="relative top-[60px] left-[125px] w-[1350px]">
        <div className="grid grid-cols-[2fr_1fr_1fr] bg-[#FA9C42] text-white rounded-lg px-6 py-4 font-medium">
          <div>Category Name</div>
          <div>Status</div>
          <div className="text-center">Actions</div>
        </div>

        {filteredCategories.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-[2fr_1fr_1fr] items-center px-6 py-4 border-b border-[#F1C08B]"
          >
            <div>{item.name}</div>

            <div>
              <div
                onClick={() => toggleStatus(item.id)}
                className={`w-[44px] h-[22px] flex items-center rounded-full cursor-pointer transition
                  ${item.enabled ? "bg-green-500" : "bg-gray-300"}
                `}
              >
                <div
                  className={`w-[18px] h-[18px] bg-white rounded-full shadow-md transition
                    ${item.enabled ? "translate-x-[22px]" : "translate-x-[2px]"}
                  `}
                />
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                className="text-black hover:opacity-70"
                onClick={() => setEditItem(item)}
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

      {showForm && <AddCategory onClose={() => setShowForm(false)} />}

      {editItem && (
        <EditCategoryManagement
          quality={editItem}
          onClose={() => setEditItem(null)}
          onSave={saveEdit}
        />
      )}
    </div>
  );
}

export default CategoryManagement;







// import React, { useState } from "react";
// import AddCategory from "./AddCategory";
// import EditCategoryManagement from "./EditCategoryManagement"

// function CategoryManagement() {
//   const [showForm, setShowForm] = useState(false);
//    const [editItem, setEditItem] = useState(null);
  

//   // ================= CATEGORY DATA =================
//   const [categories, setCategories] = useState([
//     { id: 1, name: "Admin", enabled: true },
//     { id: 2, name: "Admin", enabled: true },
//     { id: 3, name: "Admin", enabled: true },
//     { id: 4, name: "Admin", enabled: true },
//   ]);

//   // ================= TOGGLE STATUS =================
//   const toggleStatus = (id) => {
//     setCategories((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, enabled: !item.enabled } : item
//       )
//     );
//   };


//   const saveEdit = (updatedItem) => {
//   setCategories((prev) =>
//     prev.map((item) =>
//       item.id === updatedItem.id ? updatedItem : item
//     )
//   );
//   setEditItem(null); // close popup
// };


//   // ================= DELETE CATEGORY =================
//   const deleteCategory = (id) => {
//     setCategories((prev) => prev.filter((item) => item.id !== id));
//   };

//   return (
//     <div>

//       {/* ================= TOP BAR ================= */}
//       <div className="relative top-[30px] left-[125px] w-[1350px] h-[70px] flex items-center justify-between px-[35px] rounded-[10px] border border-[#003B67]">
//         <p className="font-bold text-[22px]">Category Management</p>

//         <button
//           onClick={() => setShowForm(true)}
//           className="px-4 py-2 rounded-lg border-2 border-[#FA9C42] hover:bg-[#FA9C42] hover:text-white transition"
//         >
//           <span className="text-[16px] font-bold text-[#FA9C42]">+</span>
//           Add Category
//         </button>
//       </div>

//       {/* ================= TABLE ================= */}
//       <div className="relative top-[60px] left-[125px] w-[1350px]">

//         {/* ===== TABLE HEADER ===== */}
//         <div className="grid grid-cols-[2fr_1fr_1fr] bg-[#FA9C42] text-white rounded-lg px-6 py-4 font-medium">
//           <div>Category Name</div>
//           <div>Status</div>
//           <div className="text-center">Actions</div>
//         </div>

//         {/* ===== TABLE ROWS ===== */}
//         {categories.map((item) => (
//           <div
//             key={item.id}
//             className="grid grid-cols-[2fr_1fr_1fr] items-center px-6 py-4 border-b border-[#F1C08B]"
//           >
//             {/* Category Name */}
//             <div>{item.name}</div>

//             {/* Status Toggle */}
//             <div>
//               <div
//                 onClick={() => toggleStatus(item.id)}
//                 className={`w-[44px] h-[22px] flex items-center rounded-full cursor-pointer transition
//                   ${item.enabled ? "bg-green-500" : "bg-gray-300"}
//                 `}
//               >
//                 <div
//                   className={`w-[18px] h-[18px] bg-white rounded-full shadow-md transition
//                     ${item.enabled ? "translate-x-[22px]" : "translate-x-[2px]"}
//                   `}
//                 />
//               </div>
//             </div>

//             {/* Actions */}
//             <div className="flex justify-center gap-4">
//               {/* Edit */}
//               <button className="text-black hover:opacity-70"
//                onClick={() => setEditItem(item)}>
//                 ✏️
//               </button>

//               {/* Delete */}
//               <button
//                 onClick={() => deleteCategory(item.id)}
//                 className="text-red-500 hover:opacity-70"
//               >
//                 🗑️
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ================= ADD CATEGORY POPUP ================= */}
//       {showForm && <AddCategory onClose={() => setShowForm(false)} />}

//         {/* ================= EDIT CATEGORY POPUP ================= */}
//          {editItem && (<EditCategoryManagement quality={editItem} onClose={() => setEditItem(null)} onSave={saveEdit}/>)}
//     </div>
//   );
// }

// export default CategoryManagement;
