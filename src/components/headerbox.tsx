export default function HeaderBox() {
  const NavRoutes = [
    'INICIO',
    'SERVIÇOS',
    'TREINADORES',
    'RELATOS',
    'FALE CONOSCO'
  ]

  return (
    <span className="flex space-x-10 text-xl text-white font-bebas">
      {NavRoutes.map((nav) => {
        console.log(nav)
        return <p key={nav}> {nav} </p>
      })}
    </span>
  )
}
