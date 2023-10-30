"use client";

import { Banner } from "./components/Banner";
import { Whatsapp } from "./components/Whatsapp";
import { ScrollToTop } from "./components/ScrollToTop";
import { Section2Assessoria } from "./components/Section2Assessoria";
import { Section1Carousel } from "./components/Section1Carousel";
import { Section3Video } from "./components/Section3Video";
import { Section4Participation } from "./components/Section4Participation/Section4Participation";
import { Section5Circuit } from "./components/Section5Circuit/Section5Circuit";
import { Section6Time } from "./components/Section6Time";
import { Section7Trainer } from "./components/Section7Trainer";
import { Section8About } from "./components/Section8About";
import { Section9Follow } from "./components/Section9Follow";
import { Section10App } from "./components/Section10App";
import { Section11Partnership } from "./components/Section11Partnership";
import { Section12Contact } from "./components/Section12Contact";
import { Footer } from "./components/Footer";

export default function Home() {

return (

<main>
  <Banner />
  <Section1Carousel />
<Section2Assessoria/>
  <Section3Video />
  <Section4Participation />
  <Section5Circuit />
  <Section6Time />
  <Section7Trainer />
  <Section8About />
  <Section9Follow />
  <Section10App />
  <Section11Partnership />
  <Section12Contact />
  <Footer/>
  <Whatsapp />
  <ScrollToTop/>
</main>
)
}









