export default function HeroBox() {
  return (
    <div className="mx-24 my-32 w-6/12">
      <h2 className="text-8xl font-bebas text-white mb-8">
        PRONTO PARA TREINAR <br />
        <b className="text-scarlet"> O SEU CORPO ?</b>
      </h2>
      <p className="text-white font-poppins font-light text-base leading-6 mb-14">
        O treinamento na academia é uma abordagem estruturada e disciplinada ao
        exercício físico que se concentra na força, resistência e melhoria geral
        do condicionamento físico.
      </p>
      <a
        href="#"
        className="flex items-center justify-center h-14 w-40 text-xl font-bebas text-scarlet border border-solid border-scarlet mb-20"
      >
        PARTICIPE AGORA
      </a>
      <span className="flex">
        <span className="w-40 h-20 flex flex-col items-center">
          <p className="font-bebas text-6xl text-scarlet"> 20+ </p>
          <p className="font-poppins text-sm font-light text-white">
            Anos de Experiencia
          </p>
        </span>

        <span className="w-0 h-20 border border-solid border-white mx-10"></span>

        <span className="w-40 h-20 flex flex-col items-center">
          <p className="font-bebas text-6xl text-scarlet"> 15K+ </p>
          <p className="font-poppins text-sm font-light text-white">
            Membros Iniciando
          </p>
        </span>

        <span className="w-0 h-20 border border-solid border-white mx-10"></span>

        <span className="w-40 h-20 flex flex-col items-center">
          <p className="font-bebas text-6xl text-scarlet"> 14K+ </p>
          <p className="font-poppins text-sm font-light text-white">
            Clientes Satisfeitos
          </p>
        </span>
      </span>
    </div>
  )
}
