import React from 'react'
import style from "./Hero.module.css"
function Hero({ color }) {
    console.log("in Hero");
    
    return (
        <div style={{ backgroundColor: color , height: "300px", width: "700px", border: "2px solid red " }}>
            <h3>in hero</h3>
        </div>
    )
}

export default React.memo(Hero)
