import React, { createContext, useState } from 'react'

export const UserContext = createContext()

function UserProvider({children}) {
  const [user, setUser] = useState({
    name: "alpha",
    email: "alpha@gmail.com"
  })

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider