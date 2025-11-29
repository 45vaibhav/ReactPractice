import { useCallback, useState } from 'react'
import './App.css'
import Profile from './Profile'

function App() {
  console.log("in App");
  
  const [count, setCount] = useState(0)
  const [price , setPrice]= useState(100)
  const handleClick=useCallback(()=>{setCount(count+1)},[count])
  const handleChange=useCallback(()=>{setPrice(price+100),[price]})
  return (
    <>
      <div style={{border:"2px solid red",padding:"2px ", marginTop:"0px",height:'600px',width:"800px"}}>
        <h3>in App {count}</h3>
        <h3>price {price}</h3>
        <button onClick={handleChange}>price</button>
        <Profile handleClick={handleClick} count={count}/>
      </div>
    </>
  )
}

export default App
