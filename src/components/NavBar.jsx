import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
function NavBar() {
    return (

        <div className=' flex justify-around m-2'>

            <div className="h-16 w-52 p-2 align-middle flex justify-center" >
                <Link to="/">
                    <img src={Logo} alt="" width={100} height={90} />
                </Link>
            </div>
            
            <div className='flex justify-end items-center w-[60%] text-center text-[#b68b03]'>

                <Link to="/blog" className="link">Blog</Link>
                <Link to="/contact" className="link">Contact</Link>
                <Link to="/project" className="link">Project</Link>
                <Link to="/location" className="link">Location</Link>
                <Link to="/project" className="link">Project</Link>


            </div>

        </div >
    )
}

export default NavBar