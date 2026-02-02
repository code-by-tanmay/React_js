

// function Header() {
//   return (
//     <>
//       <div className="w-[1246px] h-[80px] mt-[33px] mx-auto rounded-[10px] border-[0.5px] border-transparent bg-[#1A191966] ">
//         <div>
//           <div className="w-[869px] h-[56px] text-[24px] relative top-[25px] left-[55px] flex justify-left items-left gap-[40px] text-[24px] font-normal bg-gradient-to-r from-[#DB8314] via-[#FFC986] to-[#DB8314] bg-clip-text text-transparent">
//             <Link className="hover:text-[#DB8314]">Home</Link>
//             <Link className="hover:text-[#DB8314]">About Us</Link>
//             <Link className="hover:text-[#DB8314]">Services</Link>
//             <Link className="hover:text-[#DB8314]">Talents</Link>
//             <Link className="hover:text-[#DB8314]">Castings</Link>
//             <Link className="hover:text-[#DB8314]">contact Us</Link>
//             <Link className="relative text-[24px] hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:-bottom-[0.1px] hover:after:w-full hover:after:h-[5px] hover:after:bg-[#FA9C42]  text-[#DB8314] ">
//               Home
//             </Link>
//             <Link className="relative text-[24px] hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:-bottom-[0.5px] hover:after:w-full hover:after:h-[5px] hover:after:bg-[#FA9C42]  text-[#DB8314] ">
//               About Us
//             </Link>
//             <Link className="relative text-[24px] hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:-bottom-[0.5px] hover:after:w-full hover:after:h-[5px] hover:after:bg-[#FA9C42]  text-[#DB8314] ">
//               Services
//             </Link>
//             <Link className="relative text-[24px] hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:-bottom-[0.5px] hover:after:w-full hover:after:h-[5px] hover:after:bg-[#FA9C42]  text-[#DB8314] ">
//               Talents
//             </Link>
//             <Link className="relative text-[24px] hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:-bottom-[0.5px] hover:after:w-full hover:after:h-[5px] hover:after:bg-[#FA9C42]  text-[#DB8314] ">
//               Castings
//             </Link>
//             <Link className="relative text-[24px] hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:-bottom-[0.5px] hover:after:w-full hover:after:h-[5px] hover:after:bg-[#FA9C42]  text-[#DB8314] ">
//               Contact Us
//             </Link>
//           </div>

//           <div>
//             <input
//               type="text"
//               placeholder="search ....... "
//               className="w-[280px] h-[36px] absolute top-[55px] left-[1260px] rounded-[10px] border border-white text-slate-200 placeholder:text-slate-400 outline-none"
//             />

//             <CiSearch />
//           </div>
//         </div>
//       </div>
//       <a href="#">Home</a>
//     </>
//   );
// }

// export default Header;


// import React from "react";
// import { Link } from "react-router-dom";
// import { CiSearch } from "react-icons/ci";

import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <>
      <div className="fixed top-[33px] left-1/2 -translate-x-1/2 z-50
                w-[1246px] h-[80px]
                rounded-[10px]
                bg-[#1A191966]
                backdrop-blur-[8px]
                shadow-[0px_8px_35px_0px_rgba(0,0,0,0.55)] " >
        <div>
          <div
            className="w-[869px] h-[56px] text-[24px] relative top-[25px] left-[55px] flex justify-left items-left gap-[50px] font-normal text-[#CFCECE] hover:text-[#ffffff]"
          >
            <Link to="/" className="hover:underline hover:decoration-[#FFC986] hover:decoration-[5px]">
              Home
            </Link>
            <Link to="/AboutUs" className="hover:underline hover:decoration-[#FFC986] hover:decoration-[5px]">
              About Us
            </Link>
            <Link to="Services" className="hover:underline hover:decoration-[#FFC986] hover:decoration-[5px]">
              Services
            </Link>
            <Link to="/Talents" className="hover:underline hover:decoration-[#FFC986] hover:decoration-[5px]">
              Talents
            </Link>
            <Link to="/Castings" className="hover:underline hover:decoration-[#FFC986] hover:decoration-[5px] hover:underline-offset-[6px]">
              Castings
            </Link>
            <Link to="/ContactUs" className="hover:underline hover:decoration-[#FFC986] hover:decoration-[5px]">
              Contact Us
            </Link>
          </div>

          {/* Search Bar */}
          <div className="absolute right-[40px] top-[40px] top-1/2 -translate-y-1/2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search roles, artists, or projects"
                className="w-[280px] h-[36px] pl-[10px] pr-[70px] rounded-[10px] border border-white bg-transparent text-black text-[15px] placeholder:text-[#FFFFFF] outline-none  hover:text-[#FFFFFF]"
              />
              <CiSearch className="absolute right-[12px] top-1/2 -translate-y-1/2 text-black text-[20px] cursor-pointer text-white hover:text-slate-200" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;


// function Header() {
//   return (
//     <div
//       className="
//         fixed top-[33px] left-1/2 -translate-x-1/2
//         z-50
//         w-[1246px] h-[80px]
//         rounded-[10px]
//         bg-[#1A191966]
//         backdrop-blur-[8px]
//         shadow-[0px_8px_35px_0px_rgba(0,0,0,0.55)]
//       "
//     >
//       <div
//         className="
//           w-[869px] h-[56px]
//           text-[24px]
//           relative top-[25px] left-[55px]
//           flex gap-[50px]
//           font-normal text-[#CFCECE]
//         "
//       >
//         <Link to="/" className="hover:underline hover:decoration-[#FFC986] hover:decoration-[5px]">
//           Home
//         </Link>
//         <Link to="/AboutUs">About Us</Link>
//         <Link to="/Services">Services</Link>
//         <Link to="/Talents">Talents</Link>
//         <Link to="/Castings">Castings</Link>
//         <Link to="/ContactUs">Contact Us</Link>
//       </div>

//       {/* Search */}
//       <div className="absolute right-[40px] top-1/2 -translate-y-1/2">
//         <input
//           placeholder="Search roles, artists, or projects"
//           className="w-[280px] h-[36px] px-[12px] rounded-[10px]
//           border border-white bg-transparent text-white placeholder:text-white"
//         />
//       </div>
//     </div>
//   );
// }
// export default Header;

