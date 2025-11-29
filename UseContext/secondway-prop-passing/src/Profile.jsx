
import User from './User'
import { userContext } from './UserContext';

function Profile() {
  console.log("in Profile");
  
  return (
    <div style={{border:"2px solid green",height:"200px",width:"200px"}}>
      <User/>
    </div>
  )
}

export default Profile
