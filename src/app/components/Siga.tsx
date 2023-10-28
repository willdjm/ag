import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram } from 'react-icons/ai';

export function Siga() {

return (

<section className="text-white lg:h-[45rem] flex items-end">
<div id="sobre" className="max-w-6xl mx-auto px-8 lg:px-5 py-5 lg:py-20">
  <div className="">
    
    
    <div className="grid overflow-hidden md:items-end items-center justify-items-center justify-center gap-5">
    <div className="flex flex-col items-center lg:justify-center lg:items-center lg:gap-10 gap-5 w-full lg:mb-0 lg:w-full max-w-4xl px-6 pt-10">
<h3 className="lg:text-3xl text-xl text-blue-500 text-center md:py-5">Siga a Águia</h3>

</div>
<div className="flex gap-1">
<picture>
      <img className="lg:h-64" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
      </picture>
      <picture>
      <img className="lg:h-64" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
      </picture>
      <picture>
      <img className="lg:h-64" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
      </picture>
</div>
<div className="flex md:gap-10 gap-5">
  <p className="text-purple-500"><AiOutlineInstagram size={50}/></p>
  <p className="text-blue-700"><FaFacebook size={50}/></p>
</div>
    </div>
  </div>
</div>
</section>
)
}