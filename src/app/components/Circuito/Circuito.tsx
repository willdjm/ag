import React from "react";
import { Fotos } from "./Fotos";



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css'
import { Navigation } from 'swiper/modules';
import { Fotos2 } from "./Fotos2";
import { Fotos3 } from "./Fotos3";



export const Circuito = () => {

const [openTab, setOpenTab] = React.useState(1);
return (
<>
<section id="" className="flex justify-center flex-col  items-center">
<div className='flex flex-col justify-between justify-items-center lg:max-w-6xl w-full lg:py-16 py-5'>
<div className="grid w-full justify-items-center justify-center items-center">
<div className="flex flex-col items-center lg:justify-center lg:items-center gap-10 w-full lg:mb-0 lg:w-full max-w-3xl px-6">
<h3 className="lg:text-3xl text-2xl text-blue-500 text-center">Circuito próprio de provas e desafios</h3>
<p className="text-center lg:text-center mb-5">Veja algumas das provas e desafios promovidos pela Águia Assessoria Esportiva:</p>
</div>
<div className="grid md:flex lg:justify-center lg:items-center lg:gap-10 gap-5 px-8">

<button>
            <a
              className={
                "flex lg:max-w-lg lg:p-5 lg:px-5 lg:py-4 py-3 px-2 w-64 h-24 items-center justify-center bg-blue-400 shadow-md" +
                (openTab === 1
                  ? "text-white bg-blueGray-600"
                  : "text-blue-400 bg-blue-400")
              }
              onClick={e => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
<picture>
<img src="./imagem1.svg" alt="" className="h-20"/>  
</picture>
            </a>
</button>

<button>
            <a
              className={
                "flex lg:max-w-lg lg:p-5 lg:px-5 lg:py-4 py-3 px-2 w-64 h-24 items-center justify-center bg-blue-400 shadow-md" +
                (openTab === 2
                  ? "text-white bg-blueGray-600"
                  : "text-blue-400 bg-blue-400")
              }
              onClick={e => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
<picture>
<img src="./logo-desafio-aguia-run1.svg" alt="" className="h-20" />
</picture>
            </a>
</button>

<button>
            <a
              className={
                "flex lg:max-w-lg lg:p-5 lg:px-5 lg:py-4 py-3 px-2 w-64 h-24 items-center justify-center bg-blue-400 shadow-md" +
                (openTab === 3
                  ? "text-white bg-blueGray-600"
                  : "text-blue-400 bg-blue-400")
              }
              onClick={e => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist"
            >
<picture>
<img src="./logo-desafio-aguia-run1.svg" alt="" className="h-20" />
</picture>
            </a>
</button>

</div>
<div className="relative flex flex-col w-full items-center justify-center">
<div className={openTab === 1 ? "block" : "hidden"} id="link1">
<Fotos2/>
</div>
<div className={openTab === 2 ? "block" : "hidden"} id="link2">

<Fotos/>
</div>
<div className={openTab === 3 ? "block" : "hidden"} id="link3">
<Fotos3/>
</div>
</div>
</div>
</div>
</section>
</>
);
};
