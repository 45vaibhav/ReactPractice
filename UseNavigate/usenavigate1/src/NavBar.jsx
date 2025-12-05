import React from 'react'
import {Link } from 'react-router-dom'
import Home from './Home'
function NavBar() {
  return (
    <>
    <div style={{display:'flex',gap:'20px'}}>
      <Link to={'/about'}>About</Link>
      <Link to={'/'}>Home</Link>
       
       
    </div>
    
    </>
  )
}

export default NavBar
