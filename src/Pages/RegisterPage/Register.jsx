import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import TimeyeText from '../../assets/Timeye-only-text.png'
import { useAuth } from '../../Hooks/useAuth'
import { UserForm } from '../LoginPage/style'

export function RegisterPage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { mainRegister} =  useAuth()

  async function handleRegister() {
      const response = await mainRegister(email, password)
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
            <button onClick={handleRegister}>Register</button>
          </div>


          <div className="card-footer">
            <NavLink to="/login" className="link">Already have an account ?</NavLink>
          </div>
            
        </div>
        </UserForm>
  )
}
