import { Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';
import RootTemplate from '@/components/Layout';
import { useAuthStore } from '@/contexts/authContext';
import { useEffect } from 'react';

export default function AppRoutes() {
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      // Aqui poderiam ser carregados dados iniciais da aplicação quando o usuário estiver autenticado
      console.log('Usuário autenticado, carregando dados iniciais...');
    }
  }, [isAuthenticated]);

  return (
    <Routes>
      {routes.map(({ path, element, isPublicRoute }) => (
        <Route
          key={path}
          path={path}
          element={
            isAuthenticated ? (
              isPublicRoute ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <RootTemplate>{element}</RootTemplate>
              )
            ) : isPublicRoute ? (
              element
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      ))}
    </Routes>
  );
}
