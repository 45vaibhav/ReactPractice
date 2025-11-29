import React, { useContext } from 'react'
import { CreateContext } from './CreateContext'
import About from './About';

function User() {
    console.log("in User");
    
    const [count, setCount,handle] = useContext(CreateContext)
    function handleClick() {
        setCount(count + 10)
    }
    return (
        <div style={{border:"2px solid yellow",height:"80%",width:"50%"}}>
            <h1>in user {count}</h1>
            <button onClick={handleClick}>click</button>
            <button onClick={handle}>tap</button>
            <About/>
        </div>
    )
}

export default User
