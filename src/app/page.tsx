"use client";

import { About } from "./components/About";
import { App } from "./components/App";
import { Banner } from "./components/Banner";
import { NavBar } from "./components/NavBar";
import { Parcerias } from "./components/Parcerias";
import { Contact } from "./components/contact";


export default function Home() {
  return (
    <main>
      <>
      
<NavBar/>
<Banner/>
{/* <About/> */}
<App/>
<Parcerias/>
<Contact/>

      </>

    </main>
  )
}
