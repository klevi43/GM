import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './fonts/Jost.ttf'

import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import Workouts from './pages/Workouts'

function App() {
  

  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/login' element={<Login />} />
        <Route path='/workouts' element={<Workouts />} />
      </Routes>
    </BrowserRouter>
      
      
      
      </>
  )
}

export default App
