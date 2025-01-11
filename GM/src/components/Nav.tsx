import React from 'react'

import Lines from '../assets/svgs/lines.svg'

interface Props {
  isNavMenuOpen: boolean;
  toggleNavBar: () => void;
}
const Nav = ({isNavMenuOpen, toggleNavBar}: Props) => {
  return (
  <> 
    
      <nav className='nav'>
        <div><a className='logo' href="">GM</a></div>
        <button onClick={toggleNavBar} className='nav__toggle'><img src={Lines} alt="" /></button>
    
      <ul className={`list nav__list ${isNavMenuOpen ? "collapsible--expanded" : "collapsible--hidden"}`}>
          <li className='nav__item'><a href="">Login</a></li>
          <li className='nav__item'><a href="">Logout</a></li>
          <li className='nav__item'><a href="">My Workouts</a></li>  
        </ul> 
      </nav>  
    
  </>
    )
}

export default Nav