import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Home() {
    const [data , setData]=useState([])
    async function fetchdata(){
        const response= await axios.get("https://jsonplaceholder.typicode.com/users")
        setData(response.data)
    }
    useEffect(()=>{
        console.log("in useeffect");
        
        fetchdata();
    },[])
  return (
    <div>
      {
        data.length==0 ?
        <h1>Loading ...</h1>:
        data.map((val)=>{
            return(
                <div style={{border:"2px solid red",height:"130px"}}>
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
