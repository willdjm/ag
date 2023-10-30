"use client";

import { Whatsapp } from "../components/Whatsapp";
import { BannerPageHistory } from "../components/BannerPageHistory";
import { Contact } from "../components/contact";
import { ScrollToTopPageHistory } from "../components/ScrollToTopPageHistory";
import { FooterPageHistory } from "../components/FooterPageHistory";
import { PageHistoryValores } from "../components/PageHistoryValores";
import { PageHistoryMission } from "../components/PageHistoryMission";
import { PageHistoryHistory } from "../components/PageHistoryHistory";
import { PageHistoryFollow } from "../components/PageHistoryFollow";

export default function PageHistory() {
return (
<main>
  <BannerPageHistory />
  <PageHistoryHistory />
  <PageHistoryMission />
  <PageHistoryValores />
  <PageHistoryFollow />
  <Contact />
  <FooterPageHistory/>
  <Whatsapp />
  <ScrollToTopPageHistory />
</main>
)
}
