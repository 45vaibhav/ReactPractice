import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
function User() {
    const[data , setData]=useState([]);
 async function fetchUser(){
    const response= await fetch("https://jsonplaceholder.typicode.com/users");
    const userData= await response.json();
    setData(userData);
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
                
               <div style={{border:"2px solid yellow",margin:"10px"}}>
                <Link to={`/userdetial_sc/${val.id}`}>{val.name}</Link> 
               </div>
            )
        })
      }
    </div>
  )
}

export default User
