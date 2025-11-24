import React from 'react'
import { useState } from 'react'
import Detials from './Detials'
export default function User({count,name}) {
    const handleChange=()=>{
        setChange(change+1)
     }
   const delChange=()=>{
        setChange(change-1)
   }
   const [change , setChange ]= useState(0)
    
  return (
    <>
    <div style={{border:"2px solid black",height:"67%",width:"70%"}}>
      <h5>user count : {count}</h5>
        <h5>form Detials : {change}</h5>
        <h5> name : {name}</h5>
      <Detials handleChange={handleChange} change={change} delChange={delChange}/>
    </div>
    </>
    
  )
}
