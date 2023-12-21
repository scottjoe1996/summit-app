import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Container } from '@mui/material';

import SummitAppBar from './components/app-bar/app-bar';
import { useAuthContext } from './providers/auth-provider/auth-context';
import LoadingPage from './pages/loading-page';
import ErrorPage from './pages/error-page';
import HomePage from './pages/home-page';

const App: React.FC = () => {
  const { isLoading, error } = useAuthContext();

  return (
    <>
      <SummitAppBar />
      <Container sx={{ paddingTop: 2 }}>
        {isLoading ? (
          <LoadingPage />
        ) : error ? (
          <ErrorPage />
        ) : (
          <Routes>
            <Route index element={<HomePage />} />
          </Routes>
        )}
      </Container>
    </>
  );
};

export default App;
