import Image from 'next/image';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import { FaLinkedin, FaPhone } from "react-icons/fa";
import { PiFacebookLogo } from 'react-icons/pi';

export function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div id='home'>
      <nav className="w-full fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-6xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:block">
              {/* LOGO */}
                <Link className='cursor-pointer' to="/" spy={true} smooth={true} offset={-100} duration={500} delay={100} onClick={() => setNavbar(!navbar)}>
                  <picture>
                    <img src="./logo.svg" alt="" />
                  </picture>
                </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="./close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="./hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <div id='home' className="h-screen md:h-auto md:items-end items-center justify-center md:grid gap-5">
                <ul className='md:flex md:items-center md:justify-end gap-10'>
                <li className="text-base text-white py-2 px-6 md:py-0 md:px-0 text-center border-b-2 md:border-b-2 md:border-opacity-0 border-white md:hover:bg-transparent">
                <Link className='cursor-pointer' to="Home" spy={true} smooth={true} offset={-100} duration={500} delay={100} onClick={() => setNavbar(!navbar)}>Home</Link>
                </li>
                <li className="text-base  text-white py-2 px-6 md:py-0 md:px-0 text-center border-b-2 md:border-b-2 md:border-opacity-0 border-white md:hover:bg-transparent">
                <Link className='cursor-pointer' to="WhatWeDo" spy={true} smooth={true} offset={-100} duration={500} delay={100} onClick={() => setNavbar(!navbar)}>O que fazemos</Link>
                </li>
                <li className="text-base  text-white py-2 px-6 md:py-0 md:px-0 text-center border-b-2 md:border-b-2 md:border-opacity-0 border-white md:hover:bg-transparent">
                <Link className='cursor-pointer' to="Contact" spy={true} smooth={true} offset={-100} duration={500} delay={100} onClick={() => setNavbar(!navbar)}>Contato</Link>
                </li>
                <li className="text-base  text-white py-2 px-6 md:py-0 md:px-0 text-center border-b-2 md:border-b-2 md:border-opacity-0 border-white md:hover:bg-transparent">
                <Link className='cursor-pointer' to="About" spy={true} smooth={true} offset={-100} duration={500} delay={100} onClick={() => setNavbar(!navbar)}>Quem somos</Link>
                </li>
                <li className="text-base  text-white py-2 px-6 md:py-0 md:px-0 text-center border-b-2 md:border-b-2 md:border-opacity-0 border-white md:hover:bg-transparent">
                <Link className='cursor-pointer' to="ClientArea" spy={true} smooth={true} offset={-100} duration={500} delay={100} onClick={() => setNavbar(!navbar)}>Área do Cliente</Link>
                </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
