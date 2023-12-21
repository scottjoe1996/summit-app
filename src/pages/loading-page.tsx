import React from 'react';

import { CircularProgress, Grid } from '@mui/material';

const LoadingPage: React.FC = () => {
  return (
    <Grid container justifyContent='center' alignItems='center' height={400}>
      <CircularProgress />
    </Grid>
  );
};

export default LoadingPage;
