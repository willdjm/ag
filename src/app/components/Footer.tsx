"use client";
import { FooterMenu } from "./FooterMenu";
import { useEffect, useState } from "react";
import { Whatsapp } from "./Whatsapp";


export function Footer() {
  const [pageYOffset, setPageYOffset] = useState<number | undefined>(undefined);
  const listenScrollEvent = () => {
    setPageYOffset(window.pageYOffset);
  };

  useEffect(() => {
    setPageYOffset(window.pageYOffset);
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
<>
  {pageYOffset && pageYOffset >= 0 && (
    <>
    <div>
    <FooterMenu/>
    <Whatsapp />
    </div>
    <footer
      className="md:fixed hidden lg:w-screen md:z-30 md:bottom-0 lg:flex md:items-center md:justify-center" >
              
        <figure className='flex items-center justify-center justify-items-center'>
        <picture >
        <img src="./Group2.svg" alt="image description" className="md:max-w-full md:w-screen"/>
    </picture>
    <figcaption className="absolute px-4 text-lg text-white bottom-6">
<div className='flex w-screen flex-1 items-center justify-between max-w-7xl'>
  </div>  
</figcaption>
    </figure>
    </footer>
        <footer>
          <picture >
          <img src="./barraMobile.png" alt="image description" className="max-w-full w-screen md:hidden lg:hidden flex"/>
          <img src="./barraIpad.png" alt="image description" className="max-w-full w-screen md:flex lg:hidden sm:hidden hidden"/>
      </picture>
      </footer>
      </>
      )}
   </>
  );
}


