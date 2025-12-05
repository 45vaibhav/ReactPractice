import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Screens/About'
import Services from './Screens/Services'
import Home from './Screens/home'
import Navbar from './Navbar'


function App() {

  return (
    < ><div style={{padding:"60px"}}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Services/>}/>

        </Routes>
      </BrowserRouter>
    </div>
   
    </>
  )
}

export default App
