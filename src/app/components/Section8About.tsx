import Linkk from "next/link";
import { Link } from 'react-scroll';

export function Section8About() {

return (

<section id="About" className="flex justify-start lg:h-screen flex-col items-center bg-cover bg-center bg-[url('/Rectangle46.png')]">
<div id="#About" className='flex flex-col justify-start items-center gap-10 lg:max-w-6xl w-full lg:py-16 py-10 px-5'>

  <picture>
    <img src="./logo.svg" alt="" />
  </picture>
  <h3 className="lg:text-3xl text-2xl w-64 lg:w-full text-white text-center">Sobre a Águia Assessoria Esportiva</h3>
  <p className="text-center lg:text-base max-w-3xl text-white text-sm">
    Com o aumento exponencial de pessoas interessadas em melhorar sua qualidade de vida através da corrida de rua e dos treinamentos funcionais, nos últimos anos também cresceu a demanda de atletas amadores por profissionais qualificados nessa área, assim a experiência e os resultados obtidos na Equipe demonstraram sua capacidade de expansão para o atendimento deste público, nascendo assim a Águia Assessoria Esportiva.
  </p>
  <div className="grid md:flex lg:gap-20 gap-3 grid-cols-2">
    <span className="flex p-5 md:p-10 text-center items-center justify-center md:w-40 w-36 md:h-40 h-36 border border-white text-white text-xs rounded-full">
      Qualidade dos serviços
    </span>
    <span className="flex p-5 md:p-10 text-center items-center justify-center md:w-40 w-36 md:h-40 h-36 border border-white text-white text-xs rounded-full">
      Satisfação dos alunos
    </span>
    <span className="flex p-5 md:p-10 text-center items-center justify-center md:w-40 w-36 md:h-40 h-36 border border-white text-white text-xs rounded-full">
      Comunicação Professor/Aluno
    </span>
    <span className="flex p-5 md:p-10 text-center items-center justify-center md:w-40 w-36 md:h-40 h-36 border border-white text-white text-xs rounded-full">
      Desenvolvimento Contínuo
    </span>
  </div>
  <Linkk href="/page-history" rel="noreferrer">
  <button className="border border-white text-white font-bold py-1.5 px-5 rounded-full text-xs">
    Saiba mais
  </button>
    </Linkk>
  <div className="bg-blue-600 grid justify-items-center w-full max-w-4xl items-center justify-center md:p-20 p-5 md:gap-10 gap-7">
    <h3 className="text-white md:text-3xl text-xl max-w-sm text-center">Quer treinar com a
      Águia Assessoria Esportiva?</h3>
    <p className="text-center text-sm text-white max-w-lg hidden lg:grid">Somos especialistas em corrida de rua.
      <span className="text-center text-sm text-white max-w-lg hidden lg:grid">Nossos treinadores irmão te preparar, entre em contato.</span> </p>
    <p className="text-center text-sm text-white max-w-lg flex lg:hidden">Somos especialistas em corrida de rua. Nossos treinadores irmão te preparar, entre em contato.</p>
    <button className="bg-white text-blue-600 font-bold py-1.5 px-5 rounded-full text-xs">
    <Link className='cursor-pointer' to="Contact" spy={true} smooth={true} offset={-100} duration={500} delay={100}>Contate-nos agora
    </Link>
    </button>
  </div>
</div>
</section>
)
}