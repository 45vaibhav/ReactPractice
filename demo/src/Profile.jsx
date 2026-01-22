import style from "./profile.module.css"
import userData from "./user"
// try to basic  
function Profile({user}) {
         let data=[user]
    return (
        
        <div className={style.container}>
               <h1>{user.name}</h1>
              
               {
                data.map((val)=>(
                    <userData user={val}/>
                ))
               }
           
        </div>
    )
    
}
export default Profile