import { useAuth0 } from '@auth0/auth0-react';

type UserSession = { user: User; isAuthenticated: true } | { isAuthenticated: false };

interface AuthContext {
  userSession: UserSession;
  isLoading: boolean;
  error?: Error;
  logout: () => Promise<void>;
  loginWithRedirect: () => Promise<void>;
}

export interface User {
  email: string;
}

export const useAuthContext = (): AuthContext => {
  const { user, isAuthenticated, isLoading, error, logout, loginWithRedirect } = useAuth0<User>();

  return { userSession: isAuthenticated ? { user: user!, isAuthenticated } : { isAuthenticated }, isLoading, error, logout, loginWithRedirect };
};
