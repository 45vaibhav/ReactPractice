import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes , Route} from 'react-router-dom'
import Home from './Home'
import User from './User'
import UserDetials from './UserDetials'
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
        <Route path='/user_sc' element={<User/>}/>
        <Route path='/userdetial_sc/:id' element={<UserDetials />}/>

      </Routes>
      </BrowserRouter>
      </div>
     
    </>
  )
}

export default App
