import React from 'react'

function Logout({handleLogout}) {
  return (
    <div>
        <h1>WELCOME TO LOGIN</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
