import { createContext, useState } from 'react';
import { createSession } from '../services/api';

export const AuthContext = createContext({})

export function AuthContextProvider({children}) {

  const [user, setUser] = useState(null)

  async function mainLogin(email, password) {
    try {
      const response = await createSession(email, password)
      setUser(response.user);
    }catch(e) {
      const errorMessage = e.response.data.message
      return errorMessage
    }
  }

  async function logout(email, password) {
    setUser(null);
  }


  return (
    <AuthContext.Provider value={
      {
        authenticaded: Boolean(user),
        user,
        mainLogin,
        logout
      }}>
      {children}
    </AuthContext.Provider>
  )
}