import { useMemo, useState } from 'react'
import './App.css'
import User from './User';

function App() {
  console.log("in app...");
  
  const [count, setCount] = useState(0)
  const [price , setPrice]=useState(100)
  const data=useMemo(()=>({price}),[price])
  function handleCount() {
    setCount(count+1)
  }

  function handlePrice() {
    setPrice(price+10)
  }

  return (
    <>
    <div style={{border:"2px solid red" ,marginTop:"10px",marginBottom:"400px",width:"800px",height:"600px"}}>
      <h1>in demo {count} </h1>
      <button onClick={handleCount}>click </button>
      <button onClick={handlePrice}>update</button>
      <User data={data}/>
    </div>
    </>
  )
}

export default App
