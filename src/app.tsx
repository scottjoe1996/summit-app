import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAuthContext } from './providers/auth-provider/auth-context';
import { ProtectedRoute } from './providers/auth-provider/protected-route';
import Page from './pages/page';
import LoadingPage from './pages/loading-page';
import ErrorPage from './pages/error-page';
import HomePage from './pages/home-page';
import SchoolsPage from './pages/schools-page';

const App: React.FC = () => {
  const { isLoading, error } = useAuthContext();

  return isLoading ? (
    <LoadingPage />
  ) : error ? (
    <Page title='Summit' content={<ErrorPage />} />
  ) : (
    <Routes>
      <Route index element={<Page title='Summit' content={<HomePage />} />} />
      <Route
        path='/schools'
        element={
          <ProtectedRoute>
            <Page title='Schools' content={<SchoolsPage />} />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
