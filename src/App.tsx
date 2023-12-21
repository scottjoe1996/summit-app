import React from 'react';

import { Container } from '@mui/material';

import SummitAppBar from './components/app-bar/app-bar';
import { useAuthContext } from './providers/auth-provider/auth-context';
import LoadingPage from './pages/loading-page';
import ErrorPage from './pages/error-page';

const App: React.FC = () => {
  const { isLoading, error } = useAuthContext();

  return (
    <>
      <SummitAppBar />
      <Container sx={{ paddingTop: 2 }}>{isLoading ? <LoadingPage /> : error ? <ErrorPage /> : <h1>Summit App</h1>}</Container>
    </>
  );
};

export default App;
