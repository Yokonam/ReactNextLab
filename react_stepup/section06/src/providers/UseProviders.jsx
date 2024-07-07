import { createContext } from 'react'

export const UserContext = createContext({})

export const UserProvider = (props) => {
  const { children } = props
  const contextValue = 'Hello'
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}
