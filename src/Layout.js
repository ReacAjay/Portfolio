import Header from './components/Header'
import { Home } from './components/Home'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import Contact from './components/Contact'
import { Footer } from './components/Footer'
import About from './components/About'

export const Layout = () => {
  return (
    <>
      <Header />
      <section id="home">   <Home />      </section>
      <section id="about">  <About />     </section>
      <section id="skills"> <Skills />    </section>
      <section id="education"><Education /></section>
      <section id="contact"><Contact />   </section>
      <Footer />
    </>
  )
}
