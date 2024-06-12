import React from 'react'
import HeroSection from '../src/components/HeroSection'
import About from '../src/components/About'
import Qualities from '../src/components/Qualities'
import Menu from '../src/components/Menu'
import Services from '../src/components/Services'
import Team from '../src/components/Team'
import Reservation from '../src/components/Reservation'
import Footer from '../src/components/Footer'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Qualities/>
      <Menu/>
      <Services/>
      <Team/>
      <Reservation/>
      <Footer/>
    </div>
  )
}

export default Home
