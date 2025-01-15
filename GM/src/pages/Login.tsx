import React from 'react'
import { Link } from 'react-router'
import Home from './Home'
const Login = () => {
  return (
    <>
      <div>
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
            <Link to="/">Cancel</Link>
            <button className='btn btn--primary' role='submit'>submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login