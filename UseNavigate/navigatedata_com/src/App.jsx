import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Users from './Users'
import NavBar from './NavBar'
import UsersDetials from './UsersDetials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <BrowserRouter>
       <NavBar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/user/:id' element={<UsersDetials/>}/>
       </Routes>
       </BrowserRouter>
      </div>
     
    </>
  )
}

export default App
