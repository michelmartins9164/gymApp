export default function Header() {
  const NavRoutes = [
    'INICIO',
    'SERVIÇOS',
    'TREINADORES',
    'RELATOS',
    'FALE CONOSCO'
  ]

  return (
    <nav className="flex items-center justify-center px-24 text-white h-20 font-bebas">
      <span className="flex items-center space-x-60 ">
        <h1 className="text-3xl">
          IRON<b className="text-scarlet">GYM</b>
        </h1>
        <span className="flex space-x-10 text-xl">
          {NavRoutes.map((nav) => {
            return <p key={nav}> {nav} </p>
          })}
        </span>
        <a
          href="#"
          className=" flex items-center justify-center h-14 w-40 bg-scarlet text-xl"
        >
          COMEÇE AGORA
        </a>
      </span>
    </nav>
  )
}
