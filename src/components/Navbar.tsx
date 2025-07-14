// src/components/Navbar.tsx

import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import deshmitraLogo from '../assets/deshmitraLogo.png'
import deshmitraLogoBigScreen from '../assets/deshmitraLogo.png'

const navLinks:string[] = ['Start Selling', 'Catalog', 'Orders', 'Grow', 'Support']

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-zinc-100 shadow-md w-full">
      <div className=" mx-auto flex  items-center justify-between xl:justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-32">
        {/* Logo */}
        <div className="text-2xl  font-bold p-1 text-[#003956]">
      <img src={deshmitraLogo} className='h-full block md:hidden w-full' alt="" />
      <img style={{height:'25px'}} src={deshmitraLogoBigScreen}  className='hidden md:block h-full w-full' alt="" />

        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex  md:justify-center md:items-center md:text-[16px] xmd:text-[18px] lg:text-[18px]
         xxl:text-xl md:space-x-4  xmd:space-x-5  lg:space-x-12">
          {navLinks.map((link) => (
            <li style={{lineHeight:'100%'}} key={link} className="text-[#035884]
             font-semibold hover:text-[#035884] transition">
              <a href={`#${link.replace(/\s+/g, '').toLowerCase()}`}>
                {link}
              </a>
            </li>
          ))}

          <li>
            <button className="px-8 py-2 border-2 text-[#F77B1D] cursor-pointer border-[#F77B1D] rounded-lg
              hover:bg-[#035884] hover:text-white transition">
              Login
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner">
          <ul className="flex flex-col items-center text-lg font-semibold space-y-4 py-4 text-[#035884]">
            {navLinks.map((link) => (
              <li key={link} className="w-full text-center hover:bg-gray-100 py-2 transition">
                <a href={`#${link.replace(/\s+/g, '').toLowerCase()}`}>
                  {link}
                </a>
              </li>
            ))}

            <li className="w-full text-center">
              <button className="w-3/4 mx-auto px-4 py-2  border-2 border-[#F77B1D] rounded-lg 
              text-[#F77B1D] hover:bg-[#035884] hover:text-white transition">
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
