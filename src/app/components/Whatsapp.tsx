import { MdWhatsapp } from "react-icons/md";

export function Whatsapp() {

return (

<div className="fixed right-96 bottom-3 group z-50">
    <a href="https://wa.me/" target='_blank' rel="noreferrer"
        className="flex items-center justify-center text-white bg-green-400 rounded-full w-16 h-16 hover:bg-green-700">
        <MdWhatsapp size={40} />
    </a>
</div>
);
}