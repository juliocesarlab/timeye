
import { AuthContextProvider } from './contexts/auth'
import { AppRouter } from "./Routes/router"
import {  BrowserRouter} from 'react-router-dom'

function App() {
  return(
    <BrowserRouter>
      <AuthContextProvider>
        <AppRouter /> 
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
