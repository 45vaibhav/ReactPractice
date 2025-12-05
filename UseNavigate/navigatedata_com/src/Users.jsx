import React from 'react'
import {user} from './data'
import { Link, Links } from 'react-router-dom'
function Users() {
  return (
    <div>
     {
        user.map((user)=>{
            return (
            <div>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
            </div>
            )
        })
     }
    </div>
  )
}

export default Users
