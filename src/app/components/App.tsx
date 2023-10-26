export function App() {

return (

<section className="bg-[url('/Rectangle51.png')] text-white ">
<div id="sobre" className="max-w-6xl mx-auto px-8 lg:px-5 py-10 lg:py-10">
  <div className="">
    <div className="grid md:flex overflow-hidden md:items-start items-center justify-items-center justify-center md:gap-20">
      <h2 className="text-xl md:hidden font-medium">
        Aplicativo
      </h2>
      <h2 className="text-xl md:hidden font-medium">
        Águia Assessoria Esportiva
      </h2>
      <picture>
        <img src="./celular-app 1.svg" alt="" className="mt-10" />
      </picture>
      <div className="grid items-start justify-start md:py-20">
        <div>
          <h2 className="md:text-4xl font-medium text-3xl hidden md:flex">
            Aplicativo
          </h2>
          <h2 className="md:text-4xl font-medium text-3xl mt-3 hidden md:flex">
            Águia Assessoria Esportiva
          </h2>
          <p className="mt-10 max-w-md font-medium">Baixe o app e tenha uma ferramenta rica e completa para corredores.</p>
          <ul className="list-disc list-inside font-medium mt-5 md:mt-2">
            <li>Notificações de treinos, horários, provas e dicas</li>
            <li>Relatórios de provas</li>
            <li>Gráfico e análises de nonono</li>
            <li>NOnono</li>
          </ul>
        </div>
        <div className="grid md:flex md:items-center md:justify-start justify-center mt-5 md:mt-10 md:gap-14 gap-5">
          <picture>
            <img src="./google-play 1.svg" alt="" />
          </picture>
          <picture>
            <img src="./app-store 1.svg" alt="" />
          </picture>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
)
}