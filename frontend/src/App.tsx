import { Header } from "./components/layout/Header"
import { Footer } from "./components/layout/Footer"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Features } from "./components/sections/Features"
import { Workflow } from "./components/sections/WorkFlow"

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Workflow />
      </main>
      <Footer />
    </div>
  )
}

export default App