import { useState } from 'react'
import './App.css'
import { Router, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Router path='' element={<>salom</>}></Router>
        <Router path='/home' element={<>Home</>}></Router>
      </Routes>
    </>
  )
}

export default App
