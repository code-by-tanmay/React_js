import React, { useState } from "react";

import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineManageAccounts } from "react-icons/md";
import LeftToggle from "../../Images/LeftToggle.png";



// import Vectorthree from "../Icons/Vectorthree.png";


function Sidebar() {
  const [showInventory, setShowInventory] = useState(false);
  const [showQuotation, setShowQuotation] = useState(false);

  


  return (
    <>
    <div className="fixed top-0 left-0 w-[250px] min-h-screen p-[15px] bg-[#1E1E1E] rounded-tr-[50px] rounded-br-[50px] flex flex-col gap-[0.5px]">

      {/* Logo */}
      <div className="pt-[35px] pb-[20px]">
        <Link to="/">
        <img src="/src/Images/two.png" alt="logo" />
        </Link>
      </div>

      {/* Dashboard */}
      <Link
        to="/"
        className="flex items-center gap-6 px-[12px] py-[10px] rounded-lg hover:bg-[#FA9C42] cursor-pointer"
      >
        <MdOutlineDashboard  className="text-amber-50 h-[28px] w-[28px]" />
        <p className="text-amber-50 text-[23px]">Dashboard</p>
      </Link>

      {/* CRM */}
      <Link
        to="/crm"
        className="flex items-center gap-7 px-[12px] py-[10px] rounded-lg hover:bg-[#FA9C42] cursor-pointer"
      >
        <FaPeopleGroup  className="text-amber-50 h-[28px] w-[28px]" />
        <p className="text-amber-50 text-[20px] leading-tight">
          Customer <br /> Management CRM
        </p>
      </Link>

      <Link  to="/er"
        className="flex items-center gap-6 px-[12px] py-[10px] rounded-lg hover:bg-[#FA9C42] cursor-pointer"> 
      <img src="/src/Images/ER.png" alt="ER" className="text-amber-50 h-[28px] w-[28px]" />

        <p className="text-amber-50 text-[20px] leading-tight">Employee<br />Registration 
        </p>
      
      </Link>

      <Link  to="/qm"
        className="flex items-center gap-7 px-[12px] py-[10px] rounded-lg hover:bg-[#FA9C42] cursor-pointer"> 
      <img src="/src/Images/vector.png" alt="ER" className="text-amber-50 h-[28px] w-[28px]" />

        <p className="text-amber-50 text-[20px] leading-tight">Quality<br />Management 
        </p>
      
      </Link>

      <Link  to="/cm"
        className="flex items-center gap-7 px-[12px] py-[10px] rounded-lg hover:bg-[#FA9C42] cursor-pointer"> 
      <img src="/src/Images/vectortwo.png" alt="ER" className="text-amber-50 h-[28px] w-[28px]" />

        <p className="text-amber-50 text-[20px] leading-tight">Category<br />Management 
        </p>
      
      </Link>

       <Link  to="/bm"
        className="flex items-center gap-7 px-[12px] py-[10px] rounded-lg hover:bg-[#FA9C42] cursor-pointer"> 
      <img src="/src/Images/Vectorthree.png" alt="ER" className="text-amber-50  h-[28px] w-[28px]" />

        <p className="text-amber-50 text-[20px] leading-tight">Brand<br />Management 
        </p>
      
      </Link>

       <Link  to="/pm"
        className="flex items-center gap-7 px-[12px] py-[10px] rounded-lg hover:bg-[#FA9C42] cursor-pointer"> 
      <img src="/src/Images/Vectorfour.png" alt="ER" className="text-amber-50  h-[28px] w-[28px]" />

        <p className="text-amber-50 text-[20px] leading-tight">Product<br />Management 
        </p>
      
      </Link>

       <Link  to="/ar"
        className="flex items-center gap-7 px-[12px] py-[10px] rounded-lg hover:bg-[#FA9C42] cursor-pointer"> 
      <img src="/src/Images/Vectorsix.png" alt="AR" className="text-amber-50  h-[28px] w-[28px]" />

        <p className="text-amber-50 text-[20px] leading-tight">Architect<br />Ragistration 
        </p>


      
      </Link>

      {/* ================= INVENTORY ================= */}
<div
  onClick={() => setShowInventory(!showInventory)}
  className="flex items-center gap-7 px-[12px] py-[10px] rounded-lg hover:bg-[#FA9C42] cursor-pointer"
>
  <img
    src="/src/Images/Vectorsix.png"
    alt="Inventory"
    className="h-[28px] w-[28px]"
  />
  <p className="text-amber-50 text-[20px] leading-tight flex justify-center items-center gap-12">
    Inventory <img src={LeftToggle} alt="LT" className="h-[14px] w-[14px]" />

  </p>
</div>


{showInventory && (
  <div className="ml-[55px] flex flex-col gap-2">

    <Link
      to="/inventory/add"
      className="text-amber-50 text-[16px] text-center hover:bg-[#FA9C42] w-[140px] h-[28px] rounded-[10px] border border-white- hover:border-[2px] hover:white-slate-400 flex justify-center items-center gap-2"
    >
    <IoIosAddCircleOutline  />
    Add Inventory
    </Link>

    <Link
      to="/inventory/manage"
      className="text-amber-50 text-[16px] text-center hover:bg-[#FA9C42] w-[170px] h-[28px] rounded-[10px] border border-white hover:border-[2px] hover:white-slate-400 flex justify-center items-center gap-2"
    >
      <MdOutlineManageAccounts />
      Manage Inventory
    </Link>

  </div>
)}

    {/* ================= Quotation ================= */}
<div
  onClick={() => setShowQuotation(!showQuotation)}
  className="flex items-center gap-7 px-[12px] py-[10px] rounded-lg hover:bg-[#FA9C42] cursor-pointer"
>
  <img
    src="/src/Images/Vectorseven.png"
    alt="Quotation"
    className="h-[28px] w-[28px]"
  />
  <p className="text-amber-50 text-[20px] leading-tight flex justify-center items-center gap-12">
    Quotation <img src={LeftToggle} alt="LT" className="h-[14px] w-[14px]" />

  </p>
</div>


{showQuotation && (
  <div className="ml-[55px] flex flex-col gap-2">

    <Link
      to="/quotation/add"
      className="text-amber-50 text-[16px] text-center hover:bg-[#FA9C42] w-[140px] h-[28px] rounded-[10px] border border-white- hover:border-[2px] hover:white-slate-400 flex justify-center items-center gap-2"
    >
    <IoIosAddCircleOutline  />
    Add Quotation
    </Link>

    <Link
      to="/quotation/manage"
      className="text-amber-50 text-[16px] text-center hover:bg-[#FA9C42] w-[170px] h-[28px] rounded-[10px] border border-white hover:border-[2px] hover:white-slate-400 flex justify-center items-center gap-2"
    >
      <MdOutlineManageAccounts />
      Manage Quotation
    </Link>

  </div>
)}


    </div>
    
    </>
  );
}

export default Sidebar;
