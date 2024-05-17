import FooterBox from './footerbox'
import HeaderBox from './headerbox'
import Logo from './logo'

export default function Footer() {
  return (
    <footer className="w-full h-[304px] bg-black">
      <span className="flex items-center justify-center flex-col w-full h-60 gap-10">
        <Logo />
        <HeaderBox />
      </span>

      <FooterBox />
    </footer>
  )
}
