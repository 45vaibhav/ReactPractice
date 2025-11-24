import React, { useState } from 'react'
import User from './user'

export default function Profile({count}) {
  const[name , setName]=useState("vaibhav")
 const ChangeName=()=>{
   if(name=="vaibhav"){
    setName("Prathmesh")
   }
   else{
   setName("vaibhav")
   }
 }
  return (
    <>
    <div style={{border:"2px solid yellow", height:"75%",width:"70%", padding:"10px"}}>
      <User count={count} name={name}/>
      <h4>Profile : {count}</h4>
      <button onClick={ChangeName}>click</button>
    </div>
    </>
    
  )
}
