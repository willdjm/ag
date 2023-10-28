"use client";

import { TresAnos } from "./components/3anos";
import { About } from "./components/About";
import { App } from "./components/App";
import { Assessoria } from "./components/Assessoria/Assessoria";
import { Banner } from "./components/Banner";
import { NavBar } from "./components/NavBar";
import { Parcerias } from "./components/Parcerias";
import { Participacao } from "./components/Participacao";
import { Treinador } from "./components/Treinador";
import { Contact } from "./components/contact";
import { Circuito } from "./components/Circuito/Circuito";
import { Caroucel } from "./components/Caroucel/Caroucel";
import { Video } from "./components/Video";


export default function Home() {
  return (
    <main>
      <>
      
<NavBar/>
<Banner/>
{/* <About/> */}
<Caroucel/>
<Assessoria/>
<Video/>
<Participacao/>
<Circuito/>
<TresAnos/>
<Treinador/>
<App/>
<Parcerias/>
<Contact/>

      </>

    </main>
  )
}
