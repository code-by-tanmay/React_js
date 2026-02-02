import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import AboutUs from './Components/About Us/AboutUs'
import Services from './Components/Services/Services'
import Talents from './Components/Talents/Talents'
import Castings from './Components/Castings/Casting'
import ContactUs from './Components/Contact Us/ContactUs'
import Header from './Components/Navbar/Header'




function App() {
  return (
    <>
    

    <Header/>
   

    
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/AboutUs" element={<AboutUs />} />
     <Route path="/Services" element={<Services />} />
     <Route path="/Talents" element={<Talents />} />
     <Route path="/Castings" element={<Castings />} />
     <Route path="/ContactUs" element={<ContactUs />} />






     
     </Routes>
     
     
     
</>
    
  )
}

export default App
