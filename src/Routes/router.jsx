import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth';
import { DashboardPage } from '../Pages/DashboardPage/Dashboard';
import { HomePage } from '../Pages/HomePage/HomePage';
import { LoginPage } from '../Pages/LoginPage/Login';
import { RegisterPage } from '../Pages/RegisterPage/Register';

function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}

export function AppRouter() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={user ? <DashboardPage /> : <LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
