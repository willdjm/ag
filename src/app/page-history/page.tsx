"use client";

import { BannerPageHistory } from "../components/BannerPageHistory";
import { History } from "../components/History";
import { Missao } from "../components/Missao";
import { NavBarPageHistory } from "../components/NavBarPageHistory";
import { Siga } from "../components/Siga";
import { Valores } from "../components/Valores";
import { Contact } from "../components/contact";

export default function PageHistory() {
return (
<main>
  <NavBarPageHistory />
  <BannerPageHistory />
  <History />
  <Missao />
  <Valores />
  <Siga />
  <Contact />
</main>
)
}
