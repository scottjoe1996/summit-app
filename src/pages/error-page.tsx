import React from 'react';

import { Grid, Typography } from '@mui/material';
import { ReportProblem } from '@mui/icons-material';

const ErrorPage: React.FC = () => {
  return (
    <Grid container justifyContent='center' alignItems='center' height={400} direction='column'>
      <ReportProblem color='error' fontSize='large' />
      <Typography>An unexpected error occurred. Please refresh the page.</Typography>
    </Grid>
  );
};

export default ErrorPage;
