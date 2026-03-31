import { useState } from 'react'
import './App.css'
import { Link ,Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Help from './pages/Help'
import Subscription from './pages/Subscription'
import Health from './pages/Health'



function App() {

  return (
    <>
    <Routes>
       <Route path='' element={<Layout></Layout>}>
        <Route path='/About' element={<Help></Help>}></Route>
        <Route path='/Help' element={<>www</>}></Route>
        <Route path='/Subscription' element={<Subscription></Subscription>}></Route>
        <Route path='/Health' element={<Health></Health>}></Route>
      
      </Route>
    </Routes>
    </>
  )
}

export default App
