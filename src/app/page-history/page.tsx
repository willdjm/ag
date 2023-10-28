"use client";

import { BannerPageHistory } from "../components/BannerPageHistory";
import { Desenvolvimento } from "../components/Desenvolvimento";
import { History } from "../components/History";
import { Missao } from "../components/Missao";
import { NavBar } from "../components/NavBar";
import { Satisfacao } from "../components/Satisfacao";
import { Siga } from "../components/Siga";
import { Valores } from "../components/Valores";
import { Contact } from "../components/contact";


export default function PageHistory() {
  return (
    <main>

      
<NavBar/>
<BannerPageHistory/>
<History/>
<Missao/>
<Valores/>
<Satisfacao/>
<Desenvolvimento/>
<Siga/>
<Contact/>


    </main>
  )
}
