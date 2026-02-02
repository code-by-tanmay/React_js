import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Footer from '../../Components/Navbar/Footer';


// 👉 Dummy images (replace with your real ones)
const images = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  src: `/Image/Talents/t${i + 1}.png`,
}));

const VISIBLE_CARDS = 8;
const CARD_WIDTH = 180; // px (image + gap)

function Talents() {
  const [index, setIndex] = useState(0);

  const maxIndex = images.length - VISIBLE_CARDS;

  const nextSlide = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (

    <>

    
    <div className=" min-h-screen w-full bg-black px-[100px] pt-[300px] ">

      <div>
        <img src="" alt="" />
      </div>
      {/* Title */}
      <h1 className="text-center text-white text-3xl font-semibold">
        Featured Artists By 1 On 1 Screen
      </h1>
      <p className="text-center text-[#C89B3C] mt-2">
        Real talent... Real stories... Real opportunities...
      </p>

      {/* Film Strip */}
      <div className="relative mt-18 max-w-[1500px] mx-auto px-12">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20
                     bg-black/70 text-white p-3 rounded-full
                     hover:bg-black"
        >
          <FaChevronLeft />
        </button>

        {/* Slider Window */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * CARD_WIDTH}px)`,
            }}
          >
            {images.map((img) => (
              <div
                key={img.id}
                className="min-w-[160px] h-[200px] bg-gray-800
                           rounded-md overflow-hidden
                           hover:scale-105 transition"
              >
                <img
                  src={img.src}
                  alt="Talent"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20
                     bg-black/70 text-white p-3 rounded-full
                     hover:bg-black"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
    <Footer></Footer>
    </>
  
  );
}

export default Talents;
