import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './fonts/Jost.ttf'
import Nav from './components/Nav'

function App() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const toggleNavBar = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  }
  return (
    <>
      <Nav 
      isNavMenuOpen={isNavMenuOpen} 
      toggleNavBar={toggleNavBar}
      isLoggedIn={isLoggedIn}/>
      <div className='hero' ><div>text</div><div>image</div></div>
    </>
  )
}

export default App
