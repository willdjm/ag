"use client";

import { Whatsapp } from "../components/Whatsapp";
import { BannerPageHistory } from "../components/BannerPageHistory";
import { History } from "../components/History";
import { Missao } from "../components/Missao";
import { Valores } from "../components/Valores";
import { Contact } from "../components/contact";
import { SigaPageHistory } from "../components/SigaPageHistory";
import { ScrollToTopPageHistory } from "../components/ScrollToTopPageHistory";
import { FooterPageHistory } from "../components/FooterPageHistory";

export default function PageHistory() {
return (
<main>
  <BannerPageHistory />
  <History />
  <Missao />
  <Valores />
  <SigaPageHistory />
  <Contact />
  <FooterPageHistory/>
  <Whatsapp />
    <ScrollToTopPageHistory />
</main>
)
}
