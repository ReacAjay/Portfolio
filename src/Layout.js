import React from 'react'
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
        <Home />
        <About />
        <Skills />
        <Education />
        <Contact />
        <Footer />
    </>
    )
}
