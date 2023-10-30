import Image from 'next/image';
import Linkk from 'next/link';
import { useState } from 'react';
import { Link } from 'react-scroll';

export function NavBarPageHistory() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div id='Top'>
      <nav className="w-full fixed top-0 left-0 right-0 z-10 ">
        <div className="justify-between mx-auto lg:max-w-6xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:block">
              {/* LOGO */}
                <Linkk className='cursor-pointer px-4' href="/" onClick={() => setNavbar(!navbar)}>
                  <picture>
                    <img src="./logo.svg" alt="" className='md:h-24 h-16'/>
                  </picture>
                </Linkk>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden px-4">
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
              className={`w-full h-full flex items-center justify-center md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block bg-blue-600 md:bg-transparent w-full' : 'hidden'
              }`}
            >
              <div id='home' className="h-screen md:h-auto md:items-end items-center justify-center md:grid gap-5">
                <ul className='md:flex md:items-center md:justify-end gap-10'>
                <li className="text-base text-white py-2 px-6 md:py-0 md:px-0 text-center border-b-2 md:border-b-2 md:border-opacity-0 border-white md:hover:bg-transparent">
                <Linkk className='cursor-pointer' href="/" onClick={() => setNavbar(!navbar)}>Home</Linkk>
                </li>
                <li className="text-base  text-white py-2 px-6 md:py-0 md:px-0 text-center border-b-2 md:border-b-2 md:border-opacity-0 border-white md:hover:bg-transparent">
                <Linkk className='cursor-pointer' href="/page-history" onClick={() => setNavbar(!navbar)}>História</Linkk>
                </li>
                <li className="text-base  text-white py-2 px-6 md:py-0 md:px-0 text-center border-b-2 md:border-b-2 md:border-opacity-0 border-white md:hover:bg-transparent">
                <Link className='cursor-pointer' to="Contact" spy={true} smooth={true} offset={-100} duration={500} delay={100} onClick={() => setNavbar(!navbar)}>Contato</Link>
                </li>
                <li className="text-base  text-white py-2 px-6 md:py-0 md:px-0 text-center border-b-2 md:border-b-2 md:border-opacity-0 border-white md:hover:bg-transparent">
                <Linkk className='cursor-pointer' href="/#About" onClick={() => setNavbar(!navbar)}>Quem somos</Linkk>
                </li>
                <li className="text-base  text-white py-2 px-6 md:py-0 md:px-0 text-center border-b-2 md:border-b-2 md:border-opacity-0 border-white md:hover:bg-transparent">
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