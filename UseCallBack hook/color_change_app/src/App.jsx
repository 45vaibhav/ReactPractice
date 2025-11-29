import { useCallback, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Hero'
import Card from './Card'

function App() {
  console.log("in App");
  
  const [color, setColor]=useState("blue")
  const [count , setCount]=useState(0)
const handleChange=useCallback(()=>{
  
    if(color=="blue"){
      setColor("green")
    }
    else{
      setColor("blue")
    }
   
},[color])
 function increaseCount(){
      setCount(count+10)
    }
  const data=useMemo(()=>count,[count])
  return (
    <>
      <div style={{border:"2px solid pink",height:"700px"}}>
         <Hero color={color}/>
        <Card handleChange={handleChange} data={data} increaseCount={increaseCount}/>
       
        
      </div>
     
    </>
  )
}

export default App
