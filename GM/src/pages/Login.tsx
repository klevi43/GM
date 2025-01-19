import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router'

import Nav from '../components/Nav'
import Input from '../components/Input'
import Home from './Home'


const Login = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleNavBar = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  }

  const labels:('Email'| 'Password')[] = ['Email', 'Password'];

  const roles:('text' | 'password')[] = ['text', 'password'];
  return (
    <>
      <Nav 
      isNavMenuOpen={isNavMenuOpen} 
      toggleNavBar={toggleNavBar}
      isLoggedIn={isLoggedIn}/>

      <div className='form__container'>
        <div className='form'>

        
          <header>
            <h1 className='heading form__heading'>Login</h1>
          </header>
          <div>
            <form action='submit'>
            <Input label={labels[0]}
                    role={roles[0]}/>
              <Input label={labels[1]}
                    role={roles[1]}/>
              <div className='center'>
                <div className='btn__container form__submit-container'>
                  <Link className='link text' to="/">Cancel</Link>
                  <button className='btn btn--primary' role='submit'>Submit</button>
                </div>
              </div>
            </form> 
          </div>
          <div className='center signup'><p className='text'>Not a member?<Link className='link signup-link text' to='/signup'>Sign up</Link></p></div>
        
          </div>
          
        </div>
        </>
  )
}

export default Login