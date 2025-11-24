import { useState } from 'react'

import './App.css'
import Profile from './Profile'


function App() {
  const handleClick= ()=>{
  setCount(count+1)
}
  const [count, setCount] = useState(0)
  return (
    < >
    <div style={{border:"2px solid red",height:"600px", width:"1000px",padding:"10px"}}>
     <Profile count={count}/>
     <h4> Main :  {count}</h4>
      <button style={{margin:"10px"}} onClick={handleClick}>click</button>
     </div>
    
    </>
  )
}

export default App
