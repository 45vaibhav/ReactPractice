import React from 'react'
import {  user} from './data'
import { useParams } from 'react-router-dom'
function UsersDetials() {
    const {id}=useParams()
    const c_user=user.find((user)=> {
        return (user.id === parseInt(id))
    })
  return (
    <div>
      <h1>{c_user.name}</h1>
      <h1>{c_user.city}</h1>

    </div>
  )
}

export default UsersDetials
