import React from 'react'
// import FaceBook from "../assets/facebook.png";
// import { Link } from "react-router-dom";
import '../App.css';
import NavBar from '../components/NavBar';
import Background from '../assets/bg1.jpg'

function Home() {
  return (
    <div className='body-img body-color'>
      {/* CONTACT INFO */}
      <div className="p-2 lg:bg-[#090909] flex justify-between">

        <div className="border border-gray-600 w-[10%] m-x-1">
          <a href="https://www.facebook.com/groupofai/" target="_blank" rel="noopener noreferrer">
            {/* <i class="fa-brands fa-square-facebook"></i> */}
          </a>
          <a href="https://www.instagram.com/aigroupofai/?hl=en" target="_blank" rel="noopener noreferrer">
            {/* <InstagramIcon sx={{ color: "#b68b03", width: "20%" }} /> */}
          </a>
          <a href="https://www.youtube.com/c/AIGroupofCompanies" target="_blank" rel="noopener noreferrer">
            {/* <YouTubeIcon sx={{ color: "#b68b03", width: "20%" }} /> */}
          </a>
        </div>

        <div className="w-[30%] text-[#b68b03] text-sm text-align:center">
          <span>0311-222647 | 0311-643626 | emailto:xyz@gmail.com</span>
        </div>

      </div>
      {/* CONTACT INFO */}
      {/* height: 70, width: "40%", display: "flex", justifyContent: "space-arround", alignItems: "center"  */}


      {/* NavBar */}
      <div className="body-color h-[750px]">
        <NavBar />
        {/* Banner */}
      <div className='border-4 p-12 h-[630px] flex justify-end items-center'>
        <div className='border-4 border-[#b68b03] h-[400px] w-[30%] absolute z-10 left-80'></div>
        <div className='border-4 w-[50%] h-[500px] relative'>
        <img src={Background} alt="" width="100%" height="400px" />
        </div>
      </div>
      {/* Banner */}
      </div>
      {/* NavBar */}

      
    </div>
  )
}

export default Home