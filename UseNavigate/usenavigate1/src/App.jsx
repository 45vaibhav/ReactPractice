import { useState } from 'react'
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Dashboard from './Dashboard'
import NavBar from './NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>


      </Routes>
      </BrowserRouter>
      </div>
     
    </>
  )
}

export default App
