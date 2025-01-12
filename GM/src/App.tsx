import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './fonts/Jost.ttf'
import Pullup from './assets/images/Pullup.jpg'
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
      <div className='hero'><header className='hero__header'><h2 className='heading'>Track Progress.<br/>See Results.</h2>
      <h3 className='subheading'>Creating the best version of yourself starts today.</h3>
      <a className='btn btn--primary'>Get Started</a></header><div className='image__container'><img className='hero__image'src={Pullup} alt="" /></div></div>
      <div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam odio iure sunt magni quos reiciendis labore provident repellat, voluptatibus veniam. Laudantium earum quis consectetur nemo vero nobis illo sunt ab! Tempore, temporibus. Modi voluptatem fugit quibusdam cupiditate quia, nemo error est amet, ut distinctio, reprehenderit rerum sapiente rem esse ab!</p></div>

      
      </>
  )
}

export default App
