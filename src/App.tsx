import AboutUs from './components/about-us'
import CallToAction from './components/call-to-action'
import Footer from './components/footer'
import Hero from './components/hero'
import Testimonials from './components/testimonials'
import Trainers from './components/trainers'
import WhyChooseUs from './components/why-choose-us'

function App() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <AboutUs />
      <Trainers />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App
