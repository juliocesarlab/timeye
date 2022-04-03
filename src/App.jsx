import { AuthContextProvider } from "./contexts/auth"
import { AppRouter } from "./Routes/router"

function App() {
  return(
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  )
}

export default App
