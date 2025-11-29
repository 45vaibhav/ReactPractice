import { UserContext } from './UserContext'
import './App.css'
import Profile from './Profile'

function App() {
  const user = { name: "vaibhav" }

  return (
    <>
      <div style={{ border: "2px solid red", height: "500px", width: "700px" }}>
        <UserContext.Provider value={user}>
          <Profile />
        </UserContext.Provider>
      </div>

    </>
  )
}

export default App
