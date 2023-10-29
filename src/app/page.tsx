"use client";

import { TresAnos } from "./components/3anos";
import { App } from "./components/App";
import { Assessoria } from "./components/Assessoria";
import { Banner } from "./components/Banner";
import { NavBar } from "./components/NavBar";
import { Parcerias } from "./components/Parcerias";
import { Participacao } from "./components/Participacao/Participacao";
import { Treinador } from "./components/Treinador";
import { Contact } from "./components/contact";
import { Circuito } from "./components/Circuito/Circuito";
import { Caroucel } from "./components/Caroucel";
import { Video } from "./components/Video";
import { Siga } from "./components/Siga";
import { Sobre } from "./components/Sobre";
import { ScrollToTopp } from "./components/ScrollToTopp";
import { Whatsapp } from "./Whatsapp";

export default function Home() {

return (

<main>
  <NavBar />
  <Banner />
  <Caroucel />
  <Assessoria />
  <Video />
  <Participacao />
  <Circuito />
  <TresAnos />
  <Treinador />
  <Sobre />
  <Siga />
  <App />
  <Parcerias />
  <Contact />
  <Whatsapp />
    <ScrollToTopp />
</main>
)
}