"use client";

import { BannerPageHistory } from "../components/BannerPageHistory";
import { Contact } from "../components/contact";
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
</main>
)
}
