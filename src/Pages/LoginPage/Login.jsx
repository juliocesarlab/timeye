import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import TimeyeText from '../../assets/Timeye-only-text.png'
import { useAuth } from '../../Hooks/useAuth'
import { UserForm } from './style.js'

export function LoginPage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { mainLogin } =  useAuth()

  async function handleLogin() {
      const response = await mainLogin(email, password)
  }

  return (
      <UserForm>
        <div className="card">
          <div className="card-heading">
            <img src={TimeyeText} alt="Timeye"/>
          </div>
          <div className="card-body">
            <div className="input-control">
              <label htmlFor="email">Email</label>
              <input 
                type="text" 
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="input-control">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleLogin}>Login</button>
          </div>


          <div className="card-footer">
            <NavLink to="/register" className="link">Not have an account ?</NavLink>
          </div>
            
        </div>
        </UserForm>
  )
}

