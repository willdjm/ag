"use client";

import { TresAnos } from "./components/3anos";
import { About } from "./components/About";
import { App } from "./components/App";
import { Banner } from "./components/Banner";
import { NavBar } from "./components/NavBar";
import { Parcerias } from "./components/Parcerias";
import { Treinador } from "./components/Treinador";
import { Contact } from "./components/contact";


export default function Home() {
  return (
    <main>
      <>
      
<NavBar/>
<Banner/>
{/* <About/> */}
<TresAnos/>
<Treinador/>
<App/>
<Parcerias/>
<Contact/>

      </>

    </main>
  )
}
