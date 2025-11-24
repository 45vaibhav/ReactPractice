
import style from "./demo.module.css"
// import Logout from "./Logout"
import Profile  from "./Profile"

function Demo() {
    let data=[{
        "name":"vaibhav",
        "address":"buldhana"
     },
     {
        "name":"swapnil",
        "address":"solapur"
    }
    ];
    return (
        <div className={style.container}>
         {
         data.map((val)=> (
            <Profile user={val}/>
         
         )
         )
         }
        
        </div>
    )
}
export default Demo