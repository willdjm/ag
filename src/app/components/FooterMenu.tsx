import Linkk from 'next/link';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { BiMenu } from 'react-icons/bi';
import { IoCloseSharp } from 'react-icons/io5';


export function FooterMenu() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div id='Top'>
      <nav className="lg:w-full lg:fixed lg:bottom-3 lg:left-0 lg:right-0 lg:z-50 hidden md:block">
        <div className="justify-start mx-auto md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-end py-3 md:block">
              {/* LOGO */}
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="">
                <button
                  className="px-5"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <IoCloseSharp size={30} className='text-white'/>
                    ) : (
                    <BiMenu size={30} className='text-white'/>

                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`w-full h-full flex items-center justify-center ${
                navbar ? 'p-12 md:p-0 block bg-blue-600 md:bg-transparent w-full' : 'hidden'
              }`}
            >
              <div id='home' className="h-screen md:h-auto md:items-end items-center justify-center md:grid gap-5">
                <ul className='md:flex md:items-center md:justify-end gap-8'>
                <li className="text-base text-white py-2 px-6 md:py-0 md:px-0 text-center border-b-2 md:border-b-2 md:border-opacity-0 border-white md:hover:bg-transparent">
                <Linkk className='cursor-pointer' href="/" onClick={() => setNavbar(!navbar)}>Home</Linkk>
                </li>
                <li className="text-base  text-white py-2 px-6 md:py-0 md:px-0 text-center border-b-2 md:border-b-2 md:border-opacity-0 border-white md:hover:bg-transparent">
                <Linkk className='cursor-pointer' href="/page-history" onClick={() => setNavbar(!navbar)}>História</Linkk>
                </li>
                <li className="text-base  text-white py-2 px-6 md:py-0 md:px-0 text-center border-b-2 md:border-b-2 md:border-opacity-0 border-white md:hover:bg-transparent">
                <Link className='cursor-pointer' to="Contact" spy={true} smooth={true} offset={-100} duration={500} delay={100} onClick={() => setNavbar(!navbar)}>Contato</Link>
                </li>
                <li className="text-base  text-white py-2 px-4 text-center border-b-2 md:border-b-2 md:border-opacity-0 border-white md:hover:bg-transparent hover:border hover:border-white hover:duration-1000 border border-transparent rounded-full">
                <Linkk className='cursor-pointer' href="#" onClick={() => setNavbar(!navbar)}>Área do Cliente</Linkk>
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