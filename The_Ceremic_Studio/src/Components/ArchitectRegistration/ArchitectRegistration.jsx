import React, { useState } from "react";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
import AddArchitectRagistration from "./AddArchitectRegistration";

function ArchitectRagistration() {
  const [showForm, setShowForm] = useState(false);

  // ================= TABLE DATA (API LIKE) =================
  const customers = [
    {
      id: 1,
      Name: "Sunny Gupta",
      Whatsapp: "7859866674", // FIXED (was Whatspap)
      Commission: "Architect 2",
      Birthdate: "2025-12-15",
      Lateralpoint: "8"
    },
    {
      id: 2,
      Name: "Sunny Gupta",
      Whatsapp: "7859866674",
      Commission: "Architect 2",
      Birthdate: "2025-12-15",
      Lateralpoint: "8"
    },
    {
      id: 3,
      Name: "Sunny Gupta",
      Whatsapp: "7859866674",
      Commission: "Architect 2",
      Birthdate: "2025-12-15",
      Lateralpoint: "8"
    },
    {
      id: 4,
      Name: "Sunny Gupta",
      Whatsapp: "7859866674",
      Commission: "Architect 2",
      Birthdate: "2025-12-15",
      Lateralpoint: "8"
    },
  ];

  return (
    <>
      <div className="relative">

        {/* ================= TOP BAR ================= */}
        <div className="relative top-[30px] left-[125px] w-[1350px] h-[70px] flex items-center justify-between px-[35px] py-[10px] rounded-[10px] border border-[#003B67]">

          <p className="font-['IBM_Plex_Sans'] font-bold text-[22px]">
            Architect Ragistration
          </p>

          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-[8px] px-[12px] py-[6px] rounded-[10px] border-2 border-[#FA9C42] text-[#000000] font-medium text-[14px] hover:bg-[#FA9C42] hover:text-white transition"
          >
            <span className="text-[16px] font-bold text-[#FA9C42]">+</span>
            Add Architect
          </button>
        </div>

        {/* ================= ADD CUSTOMER MODAL ================= */}
        {showForm && (
          <AddArchitectRagistration onClosed={() => setShowForm(false)} />
        )}

        {/* ================= TABLE ================= */}
        <div className="relative top-[60px] left-[125px] w-[1350px] rounded-[12px] p-4">

          {/* Table Header */}
          <div className="grid grid-cols-[1.5fr_1.5fr_1.2fr_1fr_1fr] bg-[#FA9C42] text-white rounded-lg px-6 py-4 text-[14px] font-medium ">
            <div className="pl-[35px]">Name</div>
            <div>Whatsapp</div>
            <div>Commission</div>
            <div>Birthdate</div>
            <div >Lateralpoints</div>
          </div>

          {/* ================= TABLE ROWS ================= */}
          {customers.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[1.5fr_1.5fr_1.2fr_1fr_1fr] items-center px-6 py-3 border-b border-[#F1C08B] text-[13px]"
            >

              {/* Name */}
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-green-500 text-green-500 text-[12px]">
                  👤
                </div>
                {item.Name}
              </div>

              {/* Whatsapp */}
              <div>{item.Whatsapp}</div>

              {/* Commission */}
              <div>{item.Commission}</div>

              {/* Birthdate */}
              <div>{item.Birthdate}</div>

              {/* Lateralpoint */}
              <div className="pl-[30px]">{item.Lateralpoint}</div>

            </div>
          ))}
        </div>
        {/* ================= END TABLE ================= */}

      </div>
    </>
  );
}

export default ArchitectRagistration;
