import React, { useState } from "react";
import Vectoreight from "../../Images/vectoreight.png";
import Footer from '../../Components/Navbar/Footer';


function AboutUs() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
    <div className="  min-h-screen w-full bg-black flex items-center px-[80px]">

      {/* LEFT SIDE – Posters */}
      <div className="pl-[300px] pt-[300px]">
            <img src={Vectoreight} alt="" className="w-[530px] h-[500px] object-cover" />
            
          </div>
       

      {/* RIGHT SIDE – Content */}
      <div className="w-1/2 pl-[100px] pb-[150px] text-white">
        <h1 className="text-[42px] font-semibold text-[#F5A623]">
          Welcome to 1 on 1 Screen
        </h1>

        <h2 className="text-[22px] mt-2 text-gray-300">
          Asha Film Casting
        </h2>

        <p className="mt-6 text-[16px] leading-[28px] text-gray-400 max-w-[520px]">
          1on1 Screen – Asha Film Casting connects aspiring artists with genuine
          opportunities in film, TV, and digital media. We bridge the gap
          between talent and filmmakers through a transparent, modern, and
          creative casting platform.
        </p>

        {/* EXTRA PARAGRAPH */}
        {showMore && (
          <p className="mt-4 text-[16px] leading-[28px] text-gray-400 max-w-[520px]">
            We believe in nurturing talent and providing a trusted space where
            artists can grow, connect, and showcase their potential. From films
            to OTT platforms, we are committed to shaping meaningful careers
            through ethical and professional casting services.
          </p>
        )}

        {/* TOGGLE BUTTON */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-6 text-[#F5A623] hover:underline transition"
        >
          {showMore ? "Hide" : "Know More..."}
        </button>
      </div>
    </div>
        <Footer></Footer>
    </>
  );
}

export default AboutUs;
