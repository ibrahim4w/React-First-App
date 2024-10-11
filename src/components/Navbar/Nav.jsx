// import { useState } from "react"

import { useState } from "react";
import { Link, NavLink } from "react-router-dom"


function Nav() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    

  return (<>
    <nav className="bg-[#2c3e50] text-white fixed top-0 inset-x-0 z-50">
        <div className="container mx-auto p-8 flex flex-wrap justify-between">
            <div className="flex flex-col lg:flex-row lg:w-full lg:justify-between lg:px-5">
                <div className="navLogo font-bold text-[32px] pb-3">
                    <Link to="/home">START FRAMEWORK</Link>
                </div>

                <div className={`navLink uppercase font-bold lg:flex flex-col  ${menuOpen ? 'flex open' : 'hidden'} lg:flex-row`}> 
                    <span className="py-3 lg:mx-5">
                        <NavLink to="/about" className={({isActive}) => isActive ? "bg-[#1abc9c] p-2 rounded-lg duration-300" : " duration-100"}>About</NavLink>
                    </span>
                    <span className="py-3 lg:mx-5">
                        <NavLink to="/portfoloi" className={({isActive}) => isActive ? "bg-[#1abc9c] p-2 rounded-lg duration-300" : " duration-100"}>Portfolio</NavLink>
                    </span>
                    <span className="py-3 lg:mx-5">
                        <NavLink to="/contact" className={({isActive}) => isActive ? "bg-[#1abc9c] p-2 rounded-lg duration-300" : " duration-100"}>Contact</NavLink>
                    </span>
                    
                </div>
            </div>
            <div className="iconBar lg:hidden">
            <i onClick={toggleMenu} className="fa-solid fa-bars fa-2x text-[#1a252f] border border-[#1a252f] rounded-md px-3 py-1 cursor-pointer"></i>
            </div>

        </div>
    </nav>
    </>)
}
export default Nav