import React, { useState } from "react";
import { Link } from "react-scroll";
import { ReactComponent as Profile } from '../../assets/icons/Profile.svg'

import "../../tailwind.css";
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <nav className={`w-full fixed top-0 left-0 bg-white z-10 flex flex-col pb-2 px-10 md:flex-row md:justify-between` }>
      <div className="flex flex-row justify-between items-center w-full mt-4 md:w-auto">
        <h1 className={`font-Catamaran font-semibold text-4xl text-pro-blue`}>Barber</h1>
        <div className={`flex justify-center items-center ${activeMenu ? 'flex-row relative' : 'flex-col'} gap-1 w-7 h-7 cursor-pointer md:hidden`} onClick={() => setActiveMenu(!activeMenu)}>
          <div className={`bg-pro-light-blue duration-500 ${activeMenu ? 'h-full w-1 absolute origin-center rotate-[135deg]' : 'w-full h-1'} rounded-lg`}></div>
          <div className={`bg-pro-light-blue duration-500 ${activeMenu ? 'h-full w-1 absolute origin-center rotate-[135deg] opacity-0' : 'w-full h-1'} rounded-lg`}></div>
          <div className={`bg-pro-light-blue duration-500 ${activeMenu ? 'h-full w-1 absolute origin-center rotate-45' : ' w-full h-1'} rounded-lg`}></div>
        </div>
      </div>
      <ul className={`flex-col ${activeMenu ? 'flex' : 'hidden'} md:flex md:flex-row`}>
        <li className={`flex items-center p-3 md:mt-5 font-Catamaran font-medium text-2xl cursor-pointer md:rounded-md hover:bg-pro-light-blue`}>
          <Link to='home' onClick={() => {setActiveMenu(false)}} spy={true} smooth={true} offset={50} duration={500}>Home</Link>
        </li>
        <li className={`flex items-center p-3 md:md:mt-5 font-Catamaran font-medium text-2xl cursor-pointer md:rounded-md hover:bg-pro-light-blue`}>
          <Link to='history' onClick={() => {setActiveMenu(false)}} spy={true} smooth={true} offset={50} duration={500}>History</Link>
        </li>
        <li className={`flex items-center p-3 md:mt-5 font-Catamaran font-medium text-2xl cursor-pointer md:rounded-md hover:bg-pro-light-blue`}>
          <Link to='services' onClick={() => {setActiveMenu(false)}} spy={true} smooth={true} offset={50} duration={500}>Services</Link>
        </li>
        <li className={`flex items-center p-3 md:mt-5 font-Catamaran font-medium text-2xl cursor-pointer md:rounded-md hover:bg-pro-light-blue`}>
          <Link to='gallary' onClick={() => {setActiveMenu(false)}} spy={true} smooth={true} offset={50} duration={500}>Gallary</Link>
        </li>
        <li className={`flex items-center p-3 md:mt-5 font-Catamaran font-medium text-2xl cursor-pointer md:hidden md:rounded-md hover:bg-pro-light-blue`}>Profile</li>
      </ul>
      <section className='flex md:justify-center md:items-center gap-10'>
        <Profile className="hidden mt-4 cursor-pointer md:inline-block"/>
        <button className={`${activeMenu ? 'flex' : 'hidden'} md:flex justify-center items-center cursor-pointer bg-pro-blue duration-1000 hover:duration-1000 hover:shadow-xl hover:shadow-pro-light-blue opacity-50 rounded-xl text-white font-medium py-3 px-6 mt-4`}>Appointment</button>
      </section>
    </nav>
  );
};

export default Navbar;
