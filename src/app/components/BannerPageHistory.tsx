import { NavBarPageHistory } from "./NavBarPageHistory";

export function BannerPageHistory() {

return (
<section id="TopPageHistory" className="flex justify-between w-full">
  <div className='absolute z-40 w-full'>
    <NavBarPageHistory />
  </div>
  <picture >
    <img src="./bannerPageHistory.svg" alt="image description" className="max-w-full w-full" />
  </picture>
</section>
)
}
