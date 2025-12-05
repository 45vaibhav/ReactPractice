import React from 'react'
import {user} from './data'
function Users() {
  
  return (
    <div>
      {
        user.map((val)=>(
            <div>
                <h1>{val.name}</h1>
            </div>
        ))
      }
    </div>
  )
}

export default Users
