export default function Header() {
  const NavRoutes = [
    'INICIO',
    'SERVIÇOS',
    'TREINADORES',
    'RELATOS',
    'FALE CONOSCO'
  ]
  return (
    <nav className="flex items-center px-24 bg-black text-white h-20 font-bebas  ">
      {/* falta o valor exato do padding */}
      <span className="flex items-center space-x-60 ">
        {/* não consegui colocar o valor exato na Height ainda nem o valor exato do espaço entre os itens */}
        <h1 className="text-3xl">
          IRON<span className="text-red-600">GYM</span>
        </h1>
        {/* falta o valor exato da fonte */}
        <span className="flex space-x-10 text-xl">
          {/* falta o valor exato da fonte */}
          {NavRoutes.map((nav) => {
            console.log(nav)
            return <p key={nav}> {nav} </p>
          })}
        </span>
        <a
          href="#"
          className=" flex items-center px-8 h-14 w-40 bg-red-600 text-xl"
        >
          COMEÇE AGORA
        </a>
        {/* falta o valor exato na Widith da ancora e no tamanho do texto */}
      </span>
    </nav>
  )
}
