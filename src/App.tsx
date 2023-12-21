import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAuthContext } from './providers/auth-provider/auth-context';
import LoadingPage from './pages/loading-page';
import ErrorPage from './pages/error-page';
import HomePage from './pages/home-page';
import Page from './pages/page';

const App: React.FC = () => {
  const { isLoading, error } = useAuthContext();

  return isLoading ? (
    <LoadingPage />
  ) : error ? (
    <Page title='Summit' content={<ErrorPage />} />
  ) : (
    <Routes>
      <Route index element={<Page title='Summit' content={<HomePage />} />} />
    </Routes>
  );
};

export default App;
