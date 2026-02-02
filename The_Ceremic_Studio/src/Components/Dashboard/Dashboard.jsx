import React, { useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Form from "./Form";
import FollowHistory from "./FollowHistory";
import FollowUp from "./FollowUp";

function Dashboard() {
  const [showForm, setShowForm] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // ================= TABLE DATA (API LIKE) =================
  const customers = [
    {
      id: 1,
      customer: "Sunny Gupta",
      employee: "Sagar",
      mobile: "7859866674",
      architect: "Architect 2",
      followUp: "2025-12-15 18:30",
      status: "inactive",
    },
    {
      id: 2,
      customer: "Tanmay Rote",
      employee: "Sagar",
      mobile: "7859866674",
      architect: "Architect 2",
      followUp: "2025-12-15 18:30",
      status: "inactive",
    },
    {
      id: 3,
      customer: "Tejas Derle",
      employee: "Sagar",
      mobile: "7859866674",
      architect: "Architect 2",
      followUp: "2025-12-15 18:30",
      status: "inactive",
    },
    {
      id: 4,
      customer: "Harry Singh",
      employee: "Sagar",
      mobile: "7859866674",
      architect: "Architect 2",
      followUp: "2025-12-15 18:30",
      status: "inactive",
    },
  ];

   

  return (
    <>
      <div className="relative">

        {/* ================= TOP BAR ================= */}
        <div className="relative top-[30px] left-[125px] w-[1350px] h-[70px] flex items-center justify-between px-[35px] py-[10px] rounded-[10px] border border-[#003B67]">

          <p className="font-['IBM_Plex_Sans'] font-bold text-[22px]">
            Customer Relationship Management (CRM)
          </p>

        


          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-[8px] px-[12px] py-[6px] rounded-[10px] border-2 border-[#FA9C42] text-[#000000] font-medium text-[14px] hover:bg-[#FA9C42] hover:text-white transition"
          >
            <span className="text-[16px] font-bold text-[#FA9C42]">+</span>
            Add Customer
          </button>
        </div>

        {/* ================= ADD CUSTOMER MODAL ================= */}
        {showForm && <Form onClose={() => setShowForm(false)} />}

        {/* ================= TABLE ================= */}
        <div className="relative top-[60px] left-[125px] w-[1350px] rounded-[12px] p-4">

          {/* Table Header */}
          <div className="grid grid-cols-[1.2fr_1.5fr_1.2fr_1fr_1fr_1fr_1.5fr] bg-[#FA9C42] text-white rounded-lg px-6 py-4 text-[14px] font-medium">
            <div>Customer</div>
            <div>Employee</div>
            <div>Mobile</div>
            <div>Architect</div>
            <div>Next Follow Up</div>
            <div>Status</div>
            <div className="pl-[40px]">Action</div>
          </div>

          {/* ================= TABLE ROWS ================= */}
          {customers.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[1.2fr_1.5fr_1.2fr_1fr_1fr_1fr_1.5fr] items-center px-6 py-3 border-b border-[#F1C08B] text-[13px]"
            >

              {/* Customer */}
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-green-500 text-green-500 text-[12px]">
                  👤
                </div>
                {item.customer}
              </div>

              {/* Employee */}
              <div>{item.employee}</div>

              {/* Mobile */}
              <div>{item.mobile}</div>

              {/* Architect */}
              <div>{item.architect}</div>

              {/* Follow Up */}
              <div>{item.followUp}</div>

              {/* ================= STATUS (API CONTROLLED) ================= */}
              <div>
                <div
                  className={`w-[44px] h-[22px] flex items-center rounded-full cursor-not-allowed transition
                    ${item.status === "active" ? "bg-green-500" : "bg-gray-300"}
                  `}
                >
                  <div
                    className={`w-[18px] h-[18px] bg-white rounded-full shadow-md transition
                      ${
                        item.status === "active"
                          ? "translate-x-[22px]"
                          : "translate-x-[2px]"
                      }
                    `}
                  />
                </div>
              </div>

              {/* ================= ACTIONS ================= */}
              <div className="flex gap-4">

                {/* History */}
                <button
                  onClick={() => {
                    setSelectedCustomer(item);
                    setShowHistory(true);
                  }}
                  className="rounded-[8px] border border-[#FA9C42] px-3 py-1 text-[12px] hover:bg-[#FA9C42] hover:text-white transition"
                >
                  History
                </button>

                {/* Follow Up */}
                <button
                  onClick={() => {
                    setSelectedCustomer(item);
                    setShowFollowUp(true);
                  }}
                  className="rounded-[8px] border border-[#FA9C42] px-3 py-1 text-[12px] hover:bg-[#FA9C42] hover:text-white transition"
                >
                  Follow Up
                </button>

                {/* Edit */}
                <button className="text-black hover:opacity-70">
                  ✏️
                </button>

                {/* Delete */}
                <button className="text-red-500 hover:opacity-70">
                  🗑️
                </button>
              </div>

            </div>
          ))}
        </div>
        {/* ================= END TABLE ================= */}

        {/* ================= HISTORY MODAL ================= */}
        {showHistory && (
          <FollowHistory
            customer={selectedCustomer}
            onClose={() => setShowHistory(false)}
          />
        )}

        {/* ================= FOLLOW UP MODAL ================= */}
        {showFollowUp && (
          <FollowUp
            customer={selectedCustomer}
            onClose={() => setShowFollowUp(false)}
          />
        )}

      </div>
    </>
  );
}

export default Dashboard;
