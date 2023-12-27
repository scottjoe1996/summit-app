import React from 'react';
import { Navigate } from 'react-router-dom';

import { User, useAuthContext } from './auth-context';

interface ProtectedRouteProps {
  page: (user: User) => React.ReactElement;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ page }) => {
  const { userSession } = useAuthContext();

  if (!userSession.isAuthenticated) {
    return <Navigate to='/' />;
  }

  return page(userSession.user);
};
