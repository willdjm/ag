// import { NavBar } from "./NavBar copy";

import { NavBar } from "./NavBar";

export function Banner() {

return (
<section id="" className="flex justify-between w-full">
<div className='absolute z-40 w-full'>
       <NavBar/>
  </div>
    <picture >

        <img src="./banner.svg" alt="image description" className="max-w-full w-full" />
    </picture>
   
</section>

)
}






// export function Banner() {

// return (

// <section id='/' className="relative">
//     <div className='absolute z-40'>
//         <NavBar/>
//     </div>
//     <picture>
//     <img src="./banner.svg" alt="image description" className="max-w-full w-full" />
//     </picture>
// </section>
// );
// }  