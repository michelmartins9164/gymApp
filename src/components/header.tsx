export default function Header() {
  const NavRoutes = [
    'INICIO',
    'SERVIÇOS',
    'TREINADORES',
    'RELATOS',
    'FALE CONOSCO'
  ]

  return (
    <nav className="w-full flex items-center px-24 text-white h-20 font-bebas">
      <span className="w-full flex items-center justify-center gap-36 ">
        <h1 className="text-3xl">
          IRON<span className="text-red-600">GYM</span>
        </h1>
        <span className="flex space-x-10 text-xl">
          {NavRoutes.map((nav) => {
            return <p key={nav}> {nav} </p>
          })}
        </span>
        <a
          href="#"
          className=" flex items-center justify-center h-14 w-40 bg-red-600 text-xl"
        >
          COMEÇE AGORA
        </a>
      </span>
    </nav>
  )
}
