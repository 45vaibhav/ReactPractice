import React, { useContext } from 'react'
import { CreateContext } from './CreateContext'
import User from './User'

function Profile() {
  console.log("in Profile");
  const[count]=useContext(CreateContext)
    return (
        <div style={{ border: "2px solid red" ,height:"600px",width:"700px" }}>
            <h2>in Profile {count}</h2>
          <User/>
        </div>
    )
}

export default Profile
