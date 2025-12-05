import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const[isLodding,setLogin]=useState(false)

 function Login(){
  setLogin(true)
 }
function Logout(){
  setLogin(false)
}
  return (
    <>
      <div>
      {
        isLodding ? (
          <button onClick={Logout}>logout</button>
        ):(
          
         <div>
          <h1>WELCOME</h1>
          <button onClick={Login}>Login</button>
         </div>
        )
      }
      </div>
      
    </>
  )
}

export default App
