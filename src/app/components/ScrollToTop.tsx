import { MdWhatsapp } from "react-icons/md";
import { GoMoveToTop } from "react-icons/go";

import { Link } from "react-scroll";

export function ScrollToTop() {

return (

<div className="fixed right-5 bottom-3 md:group z-50" >

<Link 
className="flex items-center justify-center text-blue-600 bg-slate-100 rounded-lg w-14 h-14 hover:bg-slate-200 cursor-pointer"
to="Top" 
spy={true} smooth={true} offset={-100} duration={500} delay={100}>

    <GoMoveToTop size={30}/>

    </Link>
</div>


);
}