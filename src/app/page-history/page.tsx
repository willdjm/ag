"use client";

import { Whatsapp } from "../components/Whatsapp";
import { BannerPageHistory } from "../components/BannerPageHistory";
import { SigaPageHistory } from "../components/SigaPageHistory";
import { ScrollToTopPageHistory } from "../components/ScrollToTopPageHistory";
import { FooterPageHistory } from "../components/FooterPageHistory";
import { Section12Contact } from "../components/Section12Contact";
import { PageHistoryMission } from "../components/PageHistoryMission";
import { PageHistoryValues } from "../components/PageHistoryValues";

export default function PageHistory() {
return (
<main>
  <BannerPageHistory />
  <PageHistory />
  <PageHistoryMission />
  <PageHistoryValues />
  <SigaPageHistory />
  <Section12Contact />
  <FooterPageHistory/>
  <Whatsapp />
    <ScrollToTopPageHistory />
</main>
)
}
