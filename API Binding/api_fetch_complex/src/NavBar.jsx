import React from 'react'
import {Link} from 'react-router-dom'
function NavBar() {
  return (
    <div style={{display:"flex",gap:"18px"}}>
      <Link to={'/'}>Home</Link>
      <Link to={'/user_sc'}>User</Link>


    </div>
  )
}

export default NavBar
