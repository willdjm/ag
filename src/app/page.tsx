"use client";

import { About } from "./components/About";
import { App } from "./components/App";
import { Banner } from "./components/Banner";
import { NavBar } from "./components/NavBar";
import { Parcerias } from "./components/Parcerias";


export default function Home() {
  return (
    <main>
      <>
      
<NavBar/>
<Banner/>
{/* <About/> */}
<App/>
{/* <Parcerias/> */}

      </>

    </main>
  )
}
