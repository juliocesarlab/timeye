import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth';
import { DashboardPage } from '../Pages/DashboardPage/Dashboard';
import { HomePage } from '../Pages/HomePage/HomePage';
import { LoginPage } from '../Pages/LoginPage/Login';
import { RegisterPage } from '../Pages/RegisterPage/Register';
import { StatsPage } from '../Pages/StatsPage/Stats';
export function AppRouter() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={user ? <DashboardPage /> : <LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={user ? <DashboardPage /> : <LoginPage />}
      />
      <Route path="/stats" element={user ? <StatsPage /> : <LoginPage />} />
    </Routes>
  );
}
