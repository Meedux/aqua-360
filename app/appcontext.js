import React from 'react'
import { createContext, useState } from 'react'

export const ContextOBJ = createContext()
const AppContext = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const miniDb = []
    const [user, setUser] = useState(null)

    const login = (user) => {
        miniDb.forEach((item) => {
            if (item.email === user.email && item.password === user.password) {
                setIsLoggedIn(true)
                setUser(item)
            }
        })

        if (!isLoggedIn) {
            alert('Invalid credentials')
        }
    }

    const register = (user) => {
        miniDb.push(user)
        setUser(user)
        setIsLoggedIn(true)
    }

  return (
    <ContextOBJ.Provider value={{
        isLoggedIn,
        setIsLoggedIn,
        login,
        register,
        user,
        setUser
    }}>
        {children}
    </ContextOBJ.Provider>  
  )
}

export default AppContext