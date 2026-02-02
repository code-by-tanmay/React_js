// import React from "react";
// import VectorTwo from "../../Images/Vectortwo.png"; // correct relative path
// import VectorThree from "../../Images/Vectorthree.png"; // correct relative path
// import { FaStar } from "react-icons/fa";

// function Home() {
//   return (
//    <div
//       className="fixed inset-0 w-screen h-screen object-cover bg-cover bg-center"
//       style={{ backgroundImage: `url(${VectorTwo})` }}
//     >

//       <div>
//         <img src={VectorThree} alt="Vectorthree" className="pl-[700px] pt-[60px] text-[#ffffff]" />
//       </div>

//       {/* Left dark overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Content */}
//       <div className="relative z-10 pt-[480px] px-[80px] text-white">
//         <h1 className="text-[48px] font-bold">Jhund</h1>
//         <p className="mt-[10px] text-[18px] max-w-[500px]">
//           Production company: UTV Motion Pictures <br /> Directed By Nagraj Manjule <p className="text-[#B4864B]">Casting by 1 On 1 Screen (Asha Film Casting)</p>
//         </p>
//       </div>
//        <div className="mt-[12px] px-[80px] flex gap-[6px]">
//     <FaStar className="text-[#FFC986] text-[22px]" />
//     <FaStar className="text-[#FFC986] text-[22px]" />
//     <FaStar className="text-[#FFC986] text-[22px]" />
//     <FaStar className="text-[#FFC986] text-[22px]" />
//     <FaStar className="text-[#FFC986] text-[22px]" />
//   </div>
//     </div>
//   );
// }

// export default Home;



import React from "react";
import Vectortwo from "../../Images/Vectortwo.png";
import VectorThree from "../../Images/Vectorthree.png";
import VectorSix from "../../Images/Vectorsix.jpg";
// import Vectorfive from "../../Images/Vectorfive.png";

import { FaStar } from "react-icons/fa";

function Home() {
  return (
<div
  className="fixed inset-0 top-0 left-0 w-screen h-screen bg-cover bg-center bg-no-repeat "
  style={{
    backgroundImage: `linear-gradient(86.06deg, #000000 47.19%, rgba(3, 10, 27, 0.06) 60.91%), url(${Vectortwo})`
  }}
>



         {/* Left image
      <img
        src={Vectorfive}
        alt="Vectorfive"
        className="absolute top-[80px] pl-[780px] z-[80]"
      /> */}

      {/* Right image */}
      <img
        src={VectorThree}
        alt="Vectorthree"
        className="absolute top-[80px] pl-[780px] z-[80] "
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60"></div>

      {/* Content + Stars (SAME z-layer) */}
      <div className="relative z-20 pt-[480px] px-[220px] text-white">

        <img src={VectorSix} alt="VectorSix" className="bg-black"  />
        <h1 className="text-[48px] font-bold ">Jhund</h1>

        <p className="mt-[10px] text-[18px] max-w-[500px] text-gray-300">
          Production company: UTV Motion Pictures <br />
          Directed by Nagraj Manjule
        </p>

        <p className="mt-[4px] text-[#B4864B]">
          Casting by 1 On 1 Screen (Asha Film Casting)
        </p>

        {/* ⭐ Stars */}
        <div className="mt-[12px] flex gap-[6px]">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-[#FFC986] text-[22px]" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;


