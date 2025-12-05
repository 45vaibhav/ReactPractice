import React from 'react'
import{Link} from 'react-router-dom'
function NavBar() {
  return (
    <div style={{display:'flex',gap:'15px'}}>
      <Link to={'/'}> Home  </Link>
      <Link to={'/users'}> users </Link>
      
    </div>
  )
}

export default NavBar
