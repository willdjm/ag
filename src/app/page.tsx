"use client";

import { TresAnos } from "./components/3anos";
import { About } from "./components/About";
import { App } from "./components/App";
import { Assessoria } from "./components/Assessoria";
import { Banner } from "./components/Banner";
import { Circuito } from "./components/Circuito";
import { NavBar } from "./components/NavBar";
import { Parcerias } from "./components/Parcerias";
import { Participacao } from "./components/Participacao";
import { Treinador } from "./components/Treinador";
import { Contact } from "./components/contact";


export default function Home() {
  return (
    <main>
      <>
      
<NavBar/>
<Banner/>
{/* <About/> */}
<Assessoria/>
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
