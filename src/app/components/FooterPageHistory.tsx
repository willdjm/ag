import { useState } from 'react';

export function FooterPageHistory() {
  return (
    <>
    <footer
      className="md:fixed hidden lg:w-screen md:z-50 md:bottom-0 lg:flex md:items-center md:justify-center" >
        <figure className='flex items-center justify-center justify-items-center'>
        <picture >
        <img src="./Group2.svg" alt="image description" className="md:max-w-full md:w-screen"/>
    </picture>
    <figcaption className="absolute px-4 text-lg text-white bottom-6">
<div className='flex w-screen flex-1 items-center justify-between max-w-7xl'>
<div className=' flex items-center justify-end'>
<button className='hover:border hover:border-white hover:duration-1000 border border-transparent  text-base font-semibold rounded-full px-4 py-2'>
  Área de Aluno
  </button>
</div>
<div className=' flex items-center justify-end'>
<button className='border border-white bg-green-500 text-white text-base font-semibold hover:bg-white hover:text-green-500 hover:duration-700 rounded-full px-4 py-2'>
  Contate-nos
  </button>
</div>
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
  );
}

