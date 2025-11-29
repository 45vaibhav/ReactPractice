import React from 'react'

function Profile({ handleClick,count }) {
    console.log("in Proflie");
    
    return (
        <div style={{ border: "2px solid green", height: "70%", width: "50&", marginTop: "20px" }} >
            <h1>in Profile  {count} </h1>
            <button onClick={handleClick}> click</button>
        </div>
    )
}

export default React.memo(Profile);

