import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../Pages/Login'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
} 