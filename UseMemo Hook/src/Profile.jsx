import React from 'react'
import style from "./Profile.module.css";
function Profile({data}) {
  console.log("in profile");
  
  return (
  <div className={style.prof_main}>
      <div className={style.prof_sub}>
        <h3>in profile {data.price}</h3>
      </div>
    </div>
  )
}

export default React.memo(Profile)
