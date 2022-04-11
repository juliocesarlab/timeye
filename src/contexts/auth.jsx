import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, createSession, createUser } from '../services/api';

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(async () => {
    const recoveredUser = localStorage.getItem('user');

    if (recoveredUser) {
      const headerToken = localStorage.getItem('token').replace(/"/g, '');

      api.defaults.headers.Authorization = `Bearer ${headerToken}`;
      setUser(JSON.parse(recoveredUser));
    }
  }, []);

  async function mainLogin(email, password) {
    const response = await createSession(email, password);

    localStorage.setItem('user', JSON.stringify(response.data.user));
    localStorage.setItem('token', JSON.stringify(response.data.token));

    setUser(response.data.user);

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    navigate('/dashboard');
  }

  async function mainRegister(email, password) {
    try {
      const response = await createUser(email, password);

      if (response.data.status === 'success') {
        try {
          const loginResponse = await mainLogin(email, password);
        } catch (e) {
          return e;
        }
      }
    } catch (e) {
      return e;
    }
  }

  async function logout() {
    setUser(null);

    api.defaults.headers.Authorization = null;

    localStorage.removeItem('user');
    localStorage.removeItem('token');

    navigate('/');
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        mainLogin,
        mainRegister,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
