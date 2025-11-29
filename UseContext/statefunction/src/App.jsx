
import './App.css'
import UserContext from './UserContext'
import Profile from './Profile'

function App() {
  return (
    <>
      <div style={{border:"2p solid green",height:"600px"}}>
        <UserContext>
          <Profile/>
        </UserContext>
      </div>
     
    </>
  )
}

export default App
