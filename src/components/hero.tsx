import Header from './header'
import HeroBox from './herobox'

export default function Hero() {
  return (
    <div className="w-full h-[1024px] bg-background_hero bg-cover">
      <Header />
      <HeroBox />
    </div>
  )
}
