import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router'
import Nav from '../components/Nav'
import Home from './Home'


const Login = () => {
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

      <div className='form__container'>
        <div className='form'>

        
          <header>
            <h1 className='heading form__heading'>Login</h1>
          </header>
          <div>
            <form action='submit'>
              <label htmlFor='email'>
                <h2 className='form__label'>Email</h2>
                <input type="text" name='email' />
              </label>
              <label htmlFor="password">
                <h2 className='form__label'>Password</h2>
                <input type='text' name='password' />
              </label>
              <div className='center'>
                <div>
                  <Link className='form__btn' to="/">Cancel</Link>
                  <button className='btn btn--primary form__btn' role='submit'>Submit</button>
              
                </div>
                </div>
            </form> 
          </div>
          <div className='center'><p className='text'>Not a member?<Link className='' to='/signup'>Sign up</Link></p></div>
        
          </div>
        </div>
    </>
  )
}

export default Login