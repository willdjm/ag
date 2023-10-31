import React from "react";
import { FotosCasaDoCorre } from "./FotosCasaDoCorre";
import { FotosCircuitoDeAlimentos } from "./FotosCircuitoDeAlimentos";

export const Section4Participacion = () => {
const [openTab, setOpenTab] = React.useState(1);
return (
<>
  <div className="flex justify-center flex-col lg:h-screen items-center bg-blue-600">
    <div className='flex flex-col justify-between justify-items-center lg:max-w-6xl w-full lg:py-16'>
      <div className="grid w-full justify-items-center justify-center items-center">
        <div className="flex flex-col items-center lg:justify-center lg:items-center lg:gap-10 gap-5 w-full lg:mb-0 lg:w-full max-w-4xl px-6 pt-10">
          <h3 className="lg:text-3xl text-xl text-white text-center">Participação no circuito oficial de corridas de rua</h3>
          <p className="text-center lg:text-center text-white text-sm max-w-xl mb-10">
            Veja algumas das corrias de rua oficiais em que a Águia Assessoria Esportiva ajudou alunos a se prepararem e participarem:</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:justify-center lg:items-center lg:gap-5 gap-2 p-3">

          <button>
            <a
              className={
                "flex lg:max-w-xs lg:p-5 lg:px-5 lg:py-4 py-3 px-2 items-center justify-center bg-white shadow-md w-full" +
                (openTab === 1
                  ? "text-white bg-blueGray-600"
                  : "text-blueGray-600 bg-white")
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
                <img src="./logo-4-elementos1.svg" alt="" className="h-16" />
              </picture>
            </a>
          </button>

          {/* <button>
            <a
              className={
                "flex lg:max-w-xs lg:p-5 lg:px-5 lg:py-4 py-3 px-2 items-center justify-center bg-white shadow-md w-full" +
                (openTab === 2
                  ? "text-white bg-blueGray-600"
                  : "text-blueGray-600 bg-white")
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
                <img src="./logo-casa-do-corre1.svg" alt="" className="h-16" />
              </picture>
            </a>
          </button> */}

          <button>
            <a
              className={
                "flex lg:max-w-xs lg:p-5 lg:px-5 lg:py-4 py-3 px-2 items-center justify-center bg-white shadow-md w-full" +
                (openTab === 3
                  ? "text-white bg-blueGray-600"
                  : "text-blueGray-600 bg-white")
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
                <img src="./logo-corrida-rustica-jundiai1.svg" alt="" className="h-16" />
              </picture>
            </a>
          </button>

          <button>
            <a
              className={
                "flex lg:max-w-xs lg:p-5 lg:px-5 lg:py-4 py-3 px-2 items-center justify-center bg-white shadow-md w-full" +
                (openTab === 4
                  ? "text-white bg-blueGray-600"
                  : "text-blueGray-600 bg-white")
              }
              onClick={e => {
                e.preventDefault();
                setOpenTab(4);
              }}
              data-toggle="tab"
              href="#link4"
              role="tablist"
            >
              <picture>
                <img src="./logo-eco-race1.svg" alt="" className="h-16" />
              </picture>
            </a>
          </button>

          <button>
            <a
              className={
                "flex lg:max-w-xs lg:p-5 lg:px-5 lg:py-4 py-3 px-2 items-center justify-center bg-white shadow-md w-full" +
                (openTab === 5
                  ? "text-white bg-blueGray-600"
                  : "text-blueGray-600 bg-white")
              }
              onClick={e => {
                e.preventDefault();
                setOpenTab(5);
              }}
              data-toggle="tab"
              href="#link5"
              role="tablist"
            >
              <picture>
                <img src="./logo-sargento-gonzaguinha1.svg" alt="" className="h-16" />
              </picture>
            </a>
          </button>

           <button>
            <a
              className={
                "flex lg:max-w-xs lg:p-5 lg:px-5 lg:py-4 py-3 px-2 items-center justify-center bg-white shadow-md w-full" +
                (openTab === 6
                  ? "text-white bg-blueGray-600"
                  : "text-blueGray-600 bg-white")
              }
              onClick={e => {
                e.preventDefault();
                setOpenTab(6);
              }}
              data-toggle="tab"
              href="#link6"
              role="tablist"
            >
              <picture>
                <img src="./logo-sargento-gonzaguinha2.svg" alt="" className="h-16" />
              </picture>
            </a>
          </button> 

          <button>
            <a
              className={
                "flex lg:max-w-xs lg:p-5 lg:px-5 lg:py-4 py-3 px-2 items-center justify-center bg-white shadow-md w-full" +
                (openTab === 7
                  ? "text-white bg-blueGray-600"
                  : "text-blueGray-600 bg-white")
              }
              onClick={e => {
                e.preventDefault();
                setOpenTab(7);
              }}
              data-toggle="tab"
              href="#link7"
              role="tablist"
            >
              <picture>
                <img src="./logo-sp-city1.svg" alt="" className="h-16" />
              </picture>
            </a>
          </button>

          {/* <button>
            <a
              className={
                "flex lg:max-w-xs lg:p-5 lg:px-5 lg:py-4 py-3 px-2 items-center justify-center bg-white shadow-md w-full" +
                (openTab === 8
                  ? "text-white bg-blueGray-600"
                  : "text-blueGray-600 bg-white")
              }
              onClick={e => {
                e.preventDefault();
                setOpenTab(8);
              }}
              data-toggle="tab"
              href="#link8"
              role="tablist"
            >
              <picture>
                <img src="/logo-track-field1.svg" alt="" className="h-16" />
              </picture>
            </a>
          </button> */}

        </div>
        <div className="relative flex flex-col w-full items-center justify-center">
          <div className={openTab === 1 ? "block" : "hidden"} id="link1">
          <FotosCircuitoDeAlimentos/>
          </div>
          <div className={openTab === 2 ? "block" : "hidden"} id="link2">
            <FotosCasaDoCorre />
          </div>
          <div className={openTab === 3 ? "block" : "hidden"} id="link3">
            <FotosCasaDoCorre />
          </div>
          <div className={openTab === 4 ? "flex justify-items-center max-w-4xl items-center justify-center" : "hidden"} id="link4">
            <FotosCasaDoCorre />
          </div>
          <div className={openTab === 5 ? "flex justify-items-center max-w-4xl items-center justify-center" : "hidden"} id="link4">
            <FotosCasaDoCorre />
          </div>
          <div className={openTab === 6 ? "flex justify-items-center max-w-4xl items-center justify-center" : "hidden"} id="link4">
            <FotosCasaDoCorre />
          </div>
          <div className={openTab === 7 ? "flex justify-items-center max-w-4xl items-center justify-center" : "hidden"} id="link4">
            <FotosCasaDoCorre />
          </div>
          <div className={openTab === 8 ? "flex justify-items-center max-w-4xl items-center justify-center" : "hidden"} id="link4">
            <FotosCasaDoCorre />
          </div>
        </div>
      </div>
    </div>
  </div>
</>
);
};
