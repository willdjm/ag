import './AssessoriaStyle.css';

export function Assessoria() {

return (

<section id="" className="flex justify-center flex-col lg:h-screen items-center">
<div className='flex flex-col justify-between justify-items-center lg:max-w-6xl w-full lg:py-16 py-10'>
<div className="grid w-full justify-items-center justify-center items-center">
    <div className="lg:flex lg:flex-col items-center lg:justify-center lg:items-center gap-10 w-full lg:mb-0 lg:w-full lg:max-w-lg justify-center  flex ">
        <h3 className="lg:text-2xl text-xl text-blue-500 text-center px-5 max-w-md">Assessoria completa para todos os perfis e estágios de alunos.</h3>
    </div>
    <div className="md:flex grid lg:justify-center lg:items-center justify-items-center gap-5 pt-10">
        <div className="flex ld:max-w-lg p-5 lg:px-28 px-20 py-9 items-center justify-center bg-green-500 text-white shadow-md w-full">
            <p className="text-xl">Amadores</p>
        </div>
        <div className="flex lg:max-w-lg p-5 lg:px-28 px-20 py-9 items-center justify-center bg-green-600 text-white shadow-md w-full">
            <p className="text-xl">Profissionais</p>
        </div>
    </div>
    <div className="flex flex-col items-center lg:justify-center lg:items-center gap-10 w-full lg:mb-0 lg:w-full max-w-4xl px-6 py-5">
        <p className=" max-w-xl text-sm text-center pt-5">A Águia Assessoria Esportiva atende a cada um de seus alunos de maneira única e individualizada, a fim de proporcionar, de fato, maior qualidade de vida e aumento no nível de performance esportiva.</p>
    </div>
    <div className='w-full items-center justify-center justify-items-center grid grid-cols-2 md:grid-cols-4 lg:gap-2 gap-2 px-3  pt-8'>
        <div className="flip-card bg-transparent lg:w-52 lg:h-52 w-36 h-36">
            <div className="flip-card-inner duration-700 relative w-full h-full text-center">
                <div className="flip-card-front bg-blue-600 text-white flex flex-col items-center justify-center absolute w-full h-full">
                    <picture>
                        <img src="./icoprepara.svg" alt="" />
                    </picture>
                    <p className='text-center text-xs mt-5 max-w-xs w-20'>Preparamento físico</p>
                </div>
                <div className="flip-card-back bg-blue-900 text-white flex flex-col items-center justify-center absolute w-full h-full">
                    <picture>
                        <img src="./icoprepara.svg" alt="" />
                    </picture>
                    <p className='text-center text-xs mt-5 max-w-xs w-20'>Preparamento físico</p>
                </div>
            </div>
        </div>
        <div className="flip-card bg-transparent lg:w-52 lg:h-52 w-36 h-36">            <div className="flip-card-inner duration-700 relative w-full h-full text-center">
              <div className="flip-card-front bg-blue-600 text-white flex flex-col items-center justify-center absolute w-full h-full">
                    <picture>
                        <img src="./icomusc.svg" alt="" />
                    </picture>
                    <p className='text-center text-xs mt-5 max-w-xs w-20'>Fortalecimento muscular</p>
                </div>
                <div className="flip-card-back bg-red-400 text-white flex flex-col items-center justify-center absolute w-full h-full">
                    <picture>
                        <img src="./icomusc.svg" alt="" />
                    </picture>
                    <p className='text-center text-xs mt-5 max-w-xs w-20'>Fortalecimento muscular</p>
                </div>
            </div>
        </div>
        <div className="flip-card bg-transparent lg:w-52 lg:h-52 w-36 h-36">            <div className="flip-card-inner duration-700 relative w-full h-full text-center">
              <div className="flip-card-front bg-blue-600 text-white flex flex-col items-center justify-center absolute w-full h-full">
                    <picture>
                        <img src="./icoperform.svg" alt="" />
                    </picture>
                    <p className='text-center text-xs mt-5 max-w-xs w-20'>Melhoria de performance</p>
                </div>
                <div className="flip-card-back bg-green-500 text-white flex flex-col items-center justify-center absolute w-full h-full">
                    <picture>
                        <img src="./icoperform.svg" alt="" />
                    </picture>
                    <p className='text-center text-xs mt-5 max-w-xs w-20'>Melhoria de performance</p>
                </div>
            </div>
        </div>
        <div className="flip-card bg-transparent lg:w-52 lg:h-52 w-36 h-36">            <div className="flip-card-inner duration-700 relative w-full h-full text-center">
              <div className="flip-card-front bg-blue-600 text-white flex flex-col items-center justify-center absolute w-full h-full">
                    <picture>
                        <img src="./icofunc.svg" alt="" />
                    </picture>
                    <p className='text-center text-xs mt-5 max-w-xs w-20'>Treinamento funcional</p>
                </div>
                <div className="flip-card-back bg-yellow-700 text-white flex flex-col items-center justify-center absolute w-full h-full">
                    <picture>
                        <img src="./icofunc.svg" alt="" />
                    </picture>
                    <p className='text-center text-xs mt-5 max-w-xs w-20'>Treinamento funcional</p>
                </div>
            </div>
        </div>
        <div className="flip-card bg-transparent lg:w-52 lg:h-52 w-36 h-36">            <div className="flip-card-inner duration-700 relative w-full h-full text-center">
              <div className="flip-card-front bg-blue-600 text-white flex flex-col items-center justify-center absolute w-full h-full">
                    <picture>
                        <img src="./icoindv.svg" alt="" />
                    </picture>
                    <p className='text-center text-xs mt-5 max-w-xs w-28'>Treinamento individualizado</p>
                </div>
                <div className="flip-card-back bg-green-600 text-white flex flex-col items-center justify-center absolute w-full h-full">
                    <picture>
                        <img src="./icoindv.svg" alt="" />
                    </picture>
                    <p className='text-center text-xs mt-5 max-w-xs w-28'>Treinamento individualizado</p>
                </div>
            </div>
        </div>
        <div className="flip-card bg-transparent lg:w-52 lg:h-52 w-36 h-36">            <div className="flip-card-inner duration-700 relative w-full h-full text-center">
              <div className="flip-card-front bg-blue-600 text-white flex flex-col items-center justify-center absolute w-full h-full">
                    <picture>
                        <img src="./icoapoio.svg" alt="" />
                    </picture>
                    <p className='text-center text-xs mt-5 max-w-xs w-20'>Apoio técnico</p>
                </div>
                <div className="flip-card-back bg-purple-500 text-white flex flex-col items-center justify-center absolute w-full h-full">
                    <picture>
                        <img src="./icoapoio.svg" alt="" />
                    </picture>
                    <p className='text-center text-xs mt-5 max-w-xs w-20'>Apoio técnico</p>
                </div>
            </div>
        </div>
        <div className="flip-card bg-transparent lg:w-52 lg:h-52 w-36 h-36">            <div className="flip-card-inner duration-700 relative w-full h-full text-center">
              <div className="flip-card-front bg-blue-600 text-white flex flex-col items-center justify-center absolute w-full h-full">
                    <picture>
                        <img src="./icoqualid.svg" alt="" />
                    </picture>
                    <p className='text-center text-xs mt-5 max-w-xs w-20'>Qualidade de vida </p>
                </div>
                <div className="flip-card-back bg-green-400 text-white flex flex-col items-center justify-center absolute w-full h-full">
                    <picture>
                        <img src="./icoqualid.svg" alt="" />
                    </picture>
                    <p className='text-center text-xs mt-5 max-w-xs w-20'>Qualidade de vida</p>
                </div>
            </div>
        </div>
        <div className="flip-card bg-transparent lg:w-52 lg:h-52 w-36 h-36">            <div className="flip-card-inner duration-700 relative w-full h-full text-center">
              <div className="flip-card-front bg-blue-600 text-white flex flex-col items-center justify-center absolute w-full h-full">
                    <picture>
                        <img src="./icoaplic.svg" alt="" />
                    </picture>
                    <p className='text-center text-xs mt-5 max-w-xs w-32'>Acompanhamento por aplicativo</p>
                </div>
                <div className="flip-card-back bg-red-500 text-white flex flex-col items-center justify-center absolute w-full h-full">
                    <picture>
                        <img src="./icoaplic.svg" alt="" />
                    </picture>
                    <p className='text-center text-xs mt-5 max-w-xs w-32'>Acompanhamento por aplicativo</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</section>
);
}
