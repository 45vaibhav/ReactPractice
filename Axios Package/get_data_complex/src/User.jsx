import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
function User() {
    const[data , setData]=useState([]);
 async function fetchUser(){
    const response= await axios.get("https://jsonplaceholder.typicode.com/users");
    
    setData(response.data);
    }
    useEffect(()=>{
       fetchUser()
    },[])
 
  return (
    <div>
      {
        data.length == 0 ?
        <h2>Loading ...</h2>:
        data.map((val)=>{
            return(
                
               <div style={{border:"2px solid red",margin:"10px"}}>
                <Link to={`/userdetial_sc/${val.id}`}>{val.name}</Link> 
               </div>
            )
        })
      }
    </div>
  )
}

export default User
