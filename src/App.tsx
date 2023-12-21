import React from 'react';

import { CircularProgress, Container, Grid } from '@mui/material';

import SummitAppBar from './components/app-bar/app-bar';
import { useAuthContext } from './providers/auth-provider/auth-context';

const App: React.FC = () => {
  const { isLoading } = useAuthContext();

  return (
    <>
      <SummitAppBar />
      <Container sx={{ paddingTop: 2 }}>
        {isLoading ? (
          <Grid container justifyContent='center' alignItems='center' height={400}>
            <CircularProgress />
          </Grid>
        ) : (
          <h1>Summit App</h1>
        )}
      </Container>
    </>
  );
};

export default App;
