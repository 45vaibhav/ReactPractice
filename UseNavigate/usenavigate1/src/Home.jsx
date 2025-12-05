import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
   const navigate =useNavigate();

   function handleClick(){
    navigate('/dashboard')
   }
  return (
    <div>
      <h1>in Home</h1>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Home
