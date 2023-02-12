import React from 'react'
import logo from '../assets/logo.png'
import { navLinks } from '../constants'
import ContactUs from '../components/ContactUs'

const Navbar = () => {

  return (
    <nav className="w-full flex py-1 px-6 justify-between items-center navbar">
        <a href='/home'>
            <img src={ logo } alt="logo" className="w-[145px] h-[128px] cursor-pointer"/>
        </a>
        <h6 className="hidden lg:block pb-20 relative left-[-1.5%] font-semibold font-poppins">Bespoke Enterprise Solutions Inc.</h6>
        <ul className="list-none md:flex  hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => 
            (
                <li
                    key={nav.id}
                    className={`font-poppins font-bold cursor-pointer justify-between place-items-start md:text-[15px] md:m-[10px] text-black ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                >
                    <a href={`/${nav.id}`}>
                        {nav.title}
                    </a>
                </li>
            ))}
            <ContactUs/>
        </ul>
    </nav>
  )
}

export default Navbar