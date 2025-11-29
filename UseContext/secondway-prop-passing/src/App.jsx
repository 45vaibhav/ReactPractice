
import './App.css'
import ContextProvider from './ContextProvider'
import Profile from './Profile'
import User from './User';


function App() {
  console.log("in Apps");

  return (
    <>
      <ContextProvider>
        <Profile />
        <User />
      </ContextProvider>
      <div style={{ border: "2px solid green", height: "400px", width: "600px" }}>
<h1>APP</h1>
      </div>

    </>
  )
}

export default App
