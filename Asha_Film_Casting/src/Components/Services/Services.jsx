import React, { useState } from "react";
import { FaCheckCircle, FaFilm, FaGem, FaSyncAlt } from "react-icons/fa";
import Footer from "../../Components/Navbar/Footer";
import AddPremiumServices from "./AddPremiumServices";

function Services() {
  const [openModal, setOpenModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      {/* SUCCESS ALERT */}
      {showAlert && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-white inline-flex space-x-3 p-4 text-sm rounded border border-gray-200 rounded-[15px]  shadow-lg">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M16.5 8.31V9a7.5 7.5 0 1 1-4.447-6.855M16.5 3 9 10.508l-2.25-2.25"
                stroke="#22C55E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div>
              <h3 className="text-black font-medium">Congratulations!</h3>
              <p className="text-slate-500">
                You have become a Premium member
              </p>
            </div>

            <button
              onClick={() => setShowAlert(false)}
              className="text-slate-400 hover:text-slate-600 transition cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* PAGE */}
      <div className="min-h-screen w-full bg-black px-[80px] pt-[200px]">
        {/* HEADING */}
        <div className="text-center flex flex-col gap-[50px]">
          <h1 className="text-[36px] font-semibold text-gray-300">
             Elected 1 on 1 Screen - Asha Film Casting
          </h1>
          <p className="text-[#F5A623] text-[18px] pb-[60px]">
            The trusted platform where creativity meets opportunity...
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-4 gap-[60px] max-w-[1200px] mx-auto">
          {[
            {
              icon: <FaCheckCircle />,
              title: "Verified & Trusted Network",
              desc: "We verify every talent and client profile to keep your experience authentic, transparent, and secure.",
            },
            {
              icon: <FaFilm />,
              title: "Real Casting Opportunities",
              desc: "Access genuine casting calls and live projects posted by verified production houses and brands.",
            },
            {
              icon: <FaGem />,
              title: "All-in-One Platform",
              desc: "From profiles to portfolios, auditions to project management — everything under one roof.",
            },
            {
              icon: <FaSyncAlt />,
              title: "Direct Connections",
              desc: "No middlemen, connect directly with the right people.",
            },
          ].map((item, i) => (
            <div key={i} className="relative pl-[30px]">
              <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-700" />
              <div className="text-[#F5A623] text-[28px] mb-4">
                {item.icon}
              </div>
              <h3 className="text-white font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-[14px] leading-[24px]">
                {item.desc}
              </p>
              <span className="text-[#F5A623]">{">>"}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-[90px]">
          <button
            onClick={() => setShowAlert(true)}
            className="bg-[#F5A623] text-black px-[40px] py-[14px] rounded-[12px] text-[18px] font-semibold hover:opacity-90 transition"
          >
            Become a Premium Member !
          </button>

          <p className="mt-6 text-gray-400 text-[14px]">
            Not registered yet?{" "}
            <span
              onClick={() => setOpenModal(true)}
              className="text-[#F5A623] cursor-pointer hover:underline"
            >
              Sign up for membership!
            </span>
          </p>
        </div>
      </div>

      <Footer />

      {/* MODAL */}
      {openModal && (
        <AddPremiumServices
          onClose={() => setOpenModal(false)}
          onSuccess={() => {
            setOpenModal(false);
            setShowAlert(true);
          }}
        />
      )}
    </>
  );
}

export default Services;
