import React from 'react'
import { Link} from 'react-router-dom'
function NavBar() {
  return (
    <div style={{display:"flex",gap:"17px"}}>
      <Link to={'/'}> home</Link>
      <Link to={'/users'}> Users</Link>

    </div>
  )
}

export default NavBar
