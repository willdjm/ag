"use client";

import { Whatsapp } from "../components/Whatsapp";
import { BannerPageHistory } from "../components/BannerPageHistory";
import { History } from "../components/History";
import { Missao } from "../components/Missao";
import { NavBarPageHistory } from "../components/NavBarPageHistory";
import { Valores } from "../components/Valores";
import { Contact } from "../components/contact";
import { SigaPageHistory } from "../components/SigaPageHistory";
import { ScrollToTopPageHistory } from "../components/ScrollToTopPageHistory";

export default function PageHistory() {
return (
<main>
  <NavBarPageHistory />
  <BannerPageHistory />
  <History />
  <Missao />
  <Valores />
  <SigaPageHistory />
  <Contact />
  <Whatsapp />
    <ScrollToTopPageHistory />
</main>
)
}
