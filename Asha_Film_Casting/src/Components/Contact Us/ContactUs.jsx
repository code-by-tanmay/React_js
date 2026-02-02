import React from 'react'
import VectorSeven from "../../Images/Vectorseven.png";
import Footer from '../../Components/Navbar/Footer';


function ContactUs() {
  return (
    <>

    <div className=" min-h-screen flex flex-col items-center justify-center gap-5 min-h-screen w-full bg-black">
    <img src={VectorSeven} alt="" />
    <p className='text-[25px] text-[#ffffff]'>Associated With CINTAA</p>
    <p className='text-[#bcb7b7]'>One of India’s most respected associations for film & TV artistes. Their presence reflects trust, professionalism, and artist welfare, Values we follow at 1on1 Screen.</p>
    </div>
    <Footer className=""></Footer>
    </>
  )
}

export default ContactUs

