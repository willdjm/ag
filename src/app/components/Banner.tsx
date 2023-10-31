import { NavBar } from "./NavBar";
import { NavBarMobile } from "./NavBarMobile";

export function Banner() {

return (
<section id="" className="grid justify-between w-full">
    <div className='absolute z-40 w-full lg:block hidden'>
        <NavBar />
    </div>
    <div className='z-40 w-full lg:hidden block'>
        <NavBarMobile />
    </div>
    <picture >
        <img src="./banner.svg" alt="image description" className="max-w-full w-full" />
    </picture>
</section>
)
}