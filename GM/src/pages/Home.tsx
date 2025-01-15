import React, { useState } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Pullup from '../assets/images/Pullup.jpg'
import PullupDesktop from '../assets/images/Pullup-desktop.jpg'
const Home = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const heroImage =  Pullup;
  const heroImageDesktop = PullupDesktop;
  const images = [Pullup, PullupDesktop];

  const toggleNavBar = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  }
  return (
    <>
    
    <Nav 
      isNavMenuOpen={isNavMenuOpen} 
      toggleNavBar={toggleNavBar}
      isLoggedIn={isLoggedIn}/>
      <Hero images={images}/>
      <About />
    </>
  )
}

export default Home