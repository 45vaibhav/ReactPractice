import React from 'react'
import style from "./Card.module.css"
function Card({handleChange,data,increaseCount}) {
    console.log("in Card");
    
  return (
    <div className={style.card}>
        <h1 >in Card {data}</h1>
      <button onClick={handleChange}>click</button>
      <button onClick={increaseCount}>upCount</button>
    </div>
  )
}

export default React.memo(Card)
