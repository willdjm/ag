import { MdWhatsapp } from "react-icons/md";

export function Whatsapp() {

return (




<div className="fixed lg:right-28 right-5 bottom-20 lg:bottom-3 md:group z-50">
    <a href="https://wa.me/" target='_blank' rel="noreferrer"
        className="flex items-center justify-center text-white bg-green-400 rounded-full w-14 h-14 hover:bg-green-700">
        <MdWhatsapp size={35} />
    </a>
</div>
);
}