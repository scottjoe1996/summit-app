import React from 'react';

import { Container } from '@mui/material';

import SummitAppBar from './components/app-bar/app-bar';
import { useAuthContext } from './providers/auth-provider/auth-context';

const App: React.FC = () => {
  const { isLoading } = useAuthContext();

  return (
    <>
      <SummitAppBar />
      <Container>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h1>Summit App</h1>
          </>
        )}
      </Container>
    </>
  );
};

export default App;
