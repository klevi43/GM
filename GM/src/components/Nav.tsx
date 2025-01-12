import React from 'react'

import Lines from '../assets/svgs/lines.svg'

interface Props {
  isNavMenuOpen: boolean;
  isLoggedIn: boolean;
  toggleNavBar: () => void;
}
const Nav = ({isNavMenuOpen, toggleNavBar, isLoggedIn}: Props) => {
  return (
  <> 
    <div  className='container__nav'>

    
      <nav className='nav'>
        <a className='logo' href="">GM</a>
        <button onClick={toggleNavBar} className='nav__toggle'><img src={Lines} alt="" /></button>
    
      <ul className={`list nav__list ${isNavMenuOpen ? "collapsible--expanded" : "collapsible--hidden"}`}>
          {!isLoggedIn && <li className='nav__item'><a href="">Login</a></li>}
          {isLoggedIn && <li className='nav__item'><a href="">Logout</a></li>}
          <li className='nav__item'><a href="">My Workouts</a></li>  
        </ul> 
      </nav>  
    </div>
  </>
    )
}

export default Nav