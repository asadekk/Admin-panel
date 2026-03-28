import { useState } from 'react'
import './App.css'
import { Link ,Route, Routes } from 'react-router-dom'



function App() {

  return (
    <>
    <div style={{backgroundColor:'red'}}>
    <Link to={'/home'}>Demon slayer</Link>
    <Link to={'/'}>Demon slayer 2</Link>
    </div>

      <Routes>
        <Route path='' element={<>salom</>}></Route>
        <Route path='/home' element={<>home</>}></Route>
      </Routes>
    </>
  )
}

export default App
