import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../Pages/HomePage/HomePage'
import { Login } from '../Pages/Login/Login'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
} 