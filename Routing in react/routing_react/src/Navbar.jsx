
import {Link } from 'react-router-dom'
function Navbar() {
  return (
    <div style={{display:"flex", gap:"15px"}}>
      <Link to='/'>Home </Link>
      <Link to='/about'>About </Link>
      <Link to='/service'>Service </Link>
    </div>
  )
}
export default Navbar
