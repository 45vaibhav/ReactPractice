import React, { useEffect, useState } from 'react'

function Home() {
    const [data , setData]=useState([]);
     async function fetchData(){
        const response= await fetch("https://jsonplaceholder.typicode.com/users")
        const userData= await response.json();
        setData(userData);
     }
    useEffect(()=>{
        console.log("in useeffect");
        
        fetchData()
    })
  return (
    <div>
      {
    data.length ==0 ?
    <h1>Loading...</h1>
    :
    data.map((val)=>{
        return (
              <div style={{border:"2px solid red", height:"130px",marginTop:"10px"}}>
        <h2>{val.name}</h2>
        <h2>{val.email}</h2> 


    </div>
        )
    })
  
      }
    </div>
  )
}

export default Home
