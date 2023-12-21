import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthContext } from './auth-context';

interface ProtectedRouteProps {
  children: React.ReactElement;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { userSession } = useAuthContext();

  if (!userSession.isAuthenticated) {
    return <Navigate to='/' />;
  }

  return children;
};
