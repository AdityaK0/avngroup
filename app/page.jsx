import Hero from "./components/hero"
import Showcase from "./components/showcase"
import About from "./components/about"
import Contact from "./components/contact"
import Header from "./components/header"
import Footer from "./components/footer"
import FabricShowcase from "./components/fabric-showcase"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Showcase />
      <FabricShowcase />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
