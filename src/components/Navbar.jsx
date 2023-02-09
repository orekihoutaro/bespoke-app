import React from 'react'
import logo from '../assets/logo.png'
import { navLinks } from '../constants'
console.log(logo)

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 px-6 justify-between items-center navbar">
        <img src={ logo } alt="logo" className="w-[128px] h-[128px] cursor-pointer"/>
        <h6 className="sm:flex hidden pb-20 relative left-[-1.5%] font-semibold font-poppins">Bespoke Enterprise Solutions Inc.</h6>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => 
            (
                <li
                    key={nav.id}
                    className={`font-poppins font-bold cursor-pointer justify-between place-items-start text-[16px] text-black ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                >
                    <a href={`#${nav.id}`}>
                        {nav.title}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar