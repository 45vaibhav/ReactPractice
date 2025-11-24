import React from 'react'

function userData({user}) {
  console.log(user)
  return (
    <div style={{ height:"600px",width:"200px", border:"2px solid red", backgroundColor:"green" }}>
      <h1>user name is {user.name}</h1>
    </div>
  )
}

export default userData
