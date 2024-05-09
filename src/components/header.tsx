import HeaderBox from './headerbox'
import Logo from './logo'

export default function Header() {
  return (
    <nav className="flex items-center justify-center px-24 text-white h-20 font-bebas">
      <span className="flex items-center space-x-60 ">
        <Logo />
        <HeaderBox />
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
