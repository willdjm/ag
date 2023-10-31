import { NavBarMobile } from "./NavBarMobile";
import { NavBarPageHistory } from "./NavBarPageHistory";

export function BannerPageHistory() {

return (
<section id="TopPageHistory" className="flex justify-between w-full">
<div className='absolute z-40 w-full lg:block hidden'>
        <NavBarPageHistory />
    </div>
    <div className='z-40 w-full lg:hidden block'>
        <NavBarMobile />
    </div>
  <picture >
    <img src="./bannerPageHistory.svg" alt="image description" className="max-w-full w-full" />
  </picture>
</section>
)
}
