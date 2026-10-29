import StickyBar from './components/StickyBar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import WhyNyeker from './components/WhyNyeker.jsx'
import MenuBoard from './components/MenuBoard.jsx'
import SpiceLevel from './components/SpiceLevel.jsx'
import HowToOrder from './components/HowToOrder.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <StickyBar />
      <main>
        <Hero />
        <Marquee />
        <WhyNyeker />
        <MenuBoard />
        <SpiceLevel />
        <HowToOrder />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
