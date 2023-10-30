import { MdWhatsapp } from "react-icons/md";

export function Whatsapp() {

return (

<div className="fixed lg:right-96 right-4 bottom-3 group z-50">
    <a href="https://wa.me/" target='_blank' rel="noreferrer"
        className="flex items-center justify-center text-white bg-green-400 rounded-full lg:w-16 lg:h-16 w-14 h-14 hover:bg-green-700">
        <MdWhatsapp size={40} />
    </a>
</div>
);
}