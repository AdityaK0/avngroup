import Hero from "./components/hero"
import Showcase from "./components/showcase"
import About from "./components/about"
import Contact from "./components/contact"
import Header from "./components/header"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Showcase />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
