import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import Logout from './Logout'

function App() {
  const [isLogging,setLogin]=useState(false)
  function handleLogin(){
     
        setLogin(true)
       
  }
  function handleLogout(){
     
        setLogin(false)
       
  }

  return (
    <>
      <div>
        {
       isLogging?(
      
        <Logout handleLogout={handleLogout}/>
       ):(
          <Login handleLogin={handleLogin}/>
       )
      }
      </div>
      
    </>
  )
}

export default App
