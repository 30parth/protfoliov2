import Home from './page/home'
import Navbar from './layout/navbar'
import AboutPage from './page/about'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from './layout/footer'
import Skill from './page/skill'
import Project from './page/project'
import Contact from './page/contact'

function App() {

  return (
    <>
      <div className="min-h-dvh flex flex-col bg-background text-foreground font-sans">


        <BrowserRouter>
          <Navbar />
          <main className='flex-1'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<Skill />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
