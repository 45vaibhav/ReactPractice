
import {userContext} from "./UserContext"

function ContextProvider({Children}) {
    const user={"name":"vaibhav"}
  return (
     <userContext.Provider value={user}>
      {Children}
     </userContext.Provider>
    
  )
}

export default ContextProvider
