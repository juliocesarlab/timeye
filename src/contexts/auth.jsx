import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createSession, createUser } from '../services/api';

export const AuthContext = createContext({})

export function AuthContextProvider({children}) {

  const navigate = useNavigate()

  const [user, setUser] = useState(null)

  useEffect(() => { 
    const recoveredUser = localStorage.getItem('user')
    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser))
    }
  }, [])

  async function mainLogin(email, password) {
      const response = await createSession(email, password)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      setUser(response.data.user);
      navigate('/dashboard')
  }

  async function mainRegister(email, password) {
    const response = await createUser(email, password);
    localStorage.setItem('user', JSON.stringify(response.data.createdUser))
    setUser(response.data.createdUser);
    navigate('/login')
  }

  async function logout() {
    setUser(null);
    localStorage.removeItem('user')
    navigate('/')
  }


  return (
    <AuthContext.Provider value={
      {
        authenticated: !!user,
        user,
        mainLogin,
        mainRegister,
        logout
      }}>
      {children}
    </AuthContext.Provider>
  )
}