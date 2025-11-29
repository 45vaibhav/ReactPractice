import React from 'react'
import Profile from './Profile';
function User({data}) {
    console.log("in user ...");
    
  return (
    <div style={{border:"2px solid green",height:"50%"}}>
      <h1>in user {data.price} </h1>
      <Profile data={data}/>
    </div>
  )
}

export default React.memo(User)
