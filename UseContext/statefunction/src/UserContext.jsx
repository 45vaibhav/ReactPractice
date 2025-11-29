import React, { useState } from 'react'
import { CreateContext } from './CreateContext'

function UserContext({ children }) {
    const [count, setCount] = useState(0)
    function handle(){
        setCount(count+50)
    }
    return (
        <div>
            <CreateContext.Provider value={[count, setCount, handle]}>
                {children}
            </CreateContext.Provider>
        </div>
    )
}

export default UserContext
