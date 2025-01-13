import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './fonts/Jost.ttf'
import Pullup from './assets/images/Pullup.jpg'
import PullupDesktop from './assets/images/Pullup-desktop.jpg'
import Nav from './components/Nav'
import Hero from './components/Hero'

function App() {
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
        
      
      </>
  )
}

export default App
