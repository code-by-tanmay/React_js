// // import React from "react";
import React, { useContext } from "react";

import { FiAlignJustify } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { IoNotifications, IoSettingsOutline } from "react-icons/io5";

import { SearchContext } from "../../Context/SearchContext";

function Header() {

  // ✅ GLOBAL SEARCH STATE FROM CONTEXT
  const { searchInput, setSearchInput } = useContext(SearchContext);

  return (
    <div>
      {/* Navbar */}
      <div className="w-[1350px] h-[80px] mt-[80px] rounded-[10px] border border-black flex items-center px-[30px] relative ml-[400px]">

        {/* LEFT: Menu Icon */}
        <FiAlignJustify size={22} />

        {/* MIDDLE: Search Bar */}
        <div className="ml-[20px] w-[353px] h-[50px] flex items-center gap-[10px] px-[20px] rounded-[30px] border-[2px] border-[#FA9C42]">
          <FaSearch />

          <input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full h-full outline-none border-none text-gray-700 bg-transparent"
          />
        </div>

        {/* RIGHT: Icons + Profile */}
        <div className="ml-auto flex items-center gap-[20px]">
          <IoNotifications size={35} className="text-amber-400" />
          <IoSettingsOutline size={35} className="text-amber-400" />

          {/* Profile Image */}
          <img
            src="/Images/one.png"
            alt="profile"
            className="w-[40px] h-[40px] rounded-full object-cover"
          />
        </div>

      </div>
    </div>
  );
}

export default Header;


// import React, { useContext } from "react";

// import { FiAlignJustify } from "react-icons/fi";
// import { FaSearch } from "react-icons/fa";
// import { IoNotifications, IoSettingsOutline } from "react-icons/io5";

// import { SearchContext } from "../../Context/SearchContext";

// function Header() {

//     // ✅ GLOBAL SEARCH STATE
//   const { searchInput, setSearchInput } = useContext(SearchContext);

//   return (
//     <div>
//       {/* Navbar */}
//       <div className="w-[1350px] h-[80px] mt-[80px]  rounded-[10px] border border-black flex items-center px-[30px] relative ml-[400px]  ">

//         {/* LEFT: Menu Icon */}
//         <FiAlignJustify size={22} />

//         {/* MIDDLE: Search Bar */}
//         <div className="ml-[20px] w-[353px] h-[50px] flex items-center gap-[10px] px-[20px] rounded-[30px] border-[2px] border-[#FA9C42] ">
//           <FaSearch />
//            <input
//             type="text"
//             placeholder="Search..."
//             value={searchInput}
//              onChange={(e) => setSearchInput(e.target.value)}
//             className="w-full h-full outline-none border-none text-gray-700 bg-transparent"
//           />
//         </div>

//         {/* RIGHT: Icons + Profile */}
//         <div className="ml-auto flex items-center gap-[20px] ">
//           <IoNotifications size={35} className="text-amber-400"  />
//           <IoSettingsOutline size={35} className="text-amber-400" />

//           {/* Profile Image */}
//           <img
//             src="/Images/one.png"
//             alt="profile"
//             className="w-[40px] h-[40px] rounded-full object-cover"
//           />
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Header;
