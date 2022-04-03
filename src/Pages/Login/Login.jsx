import { useState } from 'react'
import TimeyeText from '../../assets/Timeye-only-text.png'
import { useAuth } from '../../Hooks/useAuth'
import { UserForm } from './style.js'

export function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { mainLogin } =  useAuth()

  async function handleLogin() {

    try {
      const response = await mainLogin(email, password)
      console.log(response)
    } catch (e) {
      //use toastify
      console.log(e)
    }

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
            <button onClick={handleLogin}>Entrar</button>
          </div>


          <div className="card-footer">
            <a href="#" className="link">Not have an account ? Get Started</a>
          </div>
            
        </div>
        </UserForm>
  )
}

