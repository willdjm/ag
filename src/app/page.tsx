"use client";

import { TresAnos } from "./components/3anos";
import { App } from "./components/App";
import { Banner } from "./components/Banner";
import { Parcerias } from "./components/Parcerias";
import { Treinador } from "./components/Treinador";
import { Contact } from "./components/contact";
import { Circuito } from "./components/Circuito/Circuito";
import { Siga } from "./components/Siga";
import { Sobre } from "./components/Sobre";
import { Whatsapp } from "./components/Whatsapp";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Section1Carousel } from "./components/Section1Carousel";
import { Section2Assessoria } from "./components/Section2Assessoria";
import { Section3Video } from "./components/Section3Video";
import { Section4Participacion } from "./components/Section4Participacion/Section4Participacion";

export default function Home() {

return (

<main>

  <Banner />
  <Section1Carousel />
  <Section2Assessoria />
  <Section3Video />
  <Section4Participacion />
  <Circuito />
  <TresAnos />
  <Treinador />
  <Sobre />
  <Siga />
  <App />
  <Parcerias />
  <Contact />
  <Footer/>

  <Whatsapp />
  <ScrollToTop/>
</main>
)
}









