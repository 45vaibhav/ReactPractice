import React, { useContext } from 'react'
import { userContext } from './UserContext'


function User() {
  console.log("in user");
  
  const user=useContext(userContext)
  return (
    <div>
      <h1>user{user.name}</h1>
    </div>
  )
}

export default User
