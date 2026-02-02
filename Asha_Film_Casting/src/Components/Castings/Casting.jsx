import React from "react";
import Vectorfive from "../../Images/Vectorfive.png";
import Footer from '../../Components/Navbar/Footer';

function Casting() {
  return (
    <>
      <div className=" min-h-screen w-full bg-black  px-[80px]">

          
        <div className=" pt-[320px] pl-[380px] text-white text-4xl font-roboto flex flex-col gap-3">
          this is the Casting page
          <p className="text-3xl font-poppins text-[#787878]">
            Asha Film Castings
          </p>
        </div>

        <div className="pt-[40px] pl-[380px] flex flex-col gap-3">
          <p className="text-2xl text-[#C89B3C]">
            TV Commercial Female Lead (20–28 yrs)
          </p>

          <p className="text-white">
            Studio: Blue Frame Productions | Location: Pune
          </p>

          <p className="font-sans text-white">Apply by: 25 Nov 2025</p>
        </div>

        <div className="pl-[1000px] ">
            <img src={Vectorfive} alt="vectorfive" />
          </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Casting;
