import React, { useContext } from 'react'
import { CreateContext } from './CreateContext'

function About() {
    console.log("in About");
    
    const[count , setCount]=useContext(CreateContext)
   function fun(){
 setCount(count=>count+100)
    
    
   }
  return (
    <div style={{border:"2px solid blue",height:"50%",width:"80%",marginTop:"10px"}}>
      <h4>in About {count}</h4>
      <button onClick={fun}>tap</button>
    </div>
  )
}

export default About
