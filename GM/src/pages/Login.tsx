import React from 'react'
import { Link } from 'react-router'
import Home from './Home'
const Login = () => {
  return (
    <>

      <div className='form__container'>
        
        <header>
          <h1 className='heading'>Login</h1>
        </header>
        <div>
          <form action='submit'>
            <label htmlFor='email'>
              <h2>Email</h2>
              <input type="text" name='email' />
            </label>
            <label htmlFor="password">
              <h2>Password</h2>
              <input type='text' name='password' />
            </label>
            <div>
              <Link to="/">Cancel</Link>
              <button className='btn btn--primary' role='submit'>submit</button>
            </div>
          </form> 
        </div>
        <div><p>Not a member?<Link to='/signup'>Sign up</Link></p></div>
      </div>
    </>
  )
}

export default Login