import React from 'react'

function Detials({handleChange,change,delChange}) {
    console.log({change});
    
  return (
    <div style={{border:"2px solid green",height:"40%",width:"50%",margin:"1px"}}>
        <h4> Detials : {change}</h4>
        <button style={{margin:"1px",height:"40px"}} onClick={handleChange}>add</button>
         <button style={{margin:"5px",height:"40px"}} onClick={delChange}>remove</button>
   
    </div>
  )
}

export default Detials
