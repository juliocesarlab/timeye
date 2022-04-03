import TimeyeText from '../../assets/Timeye-only-text.png'
import { UserForm } from './style.js'

export function Login() {
  function handleLogin()  {
    
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
              <input type="text" id='email'/>
            </div>

            <div className="input-control">
              <label htmlFor="password">Password</label>
              <input type="text" id='password'/>
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

