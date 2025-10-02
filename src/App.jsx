import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import About from './components/about'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <main className=''>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
