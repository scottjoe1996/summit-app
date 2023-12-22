import React from 'react';

import { Grid, Typography } from '@mui/material';
import { SentimentNeutral } from '@mui/icons-material';

const NotFoundPage: React.FC = () => {
  return (
    <Grid container justifyContent='center' alignItems='center' height={400} direction='column'>
      <SentimentNeutral color='warning' fontSize='large' />
      <Typography>Page not found.</Typography>
    </Grid>
  );
};

export default NotFoundPage;
