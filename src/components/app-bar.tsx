import * as React from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';

const SummitAppBar: React.FC = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h6'>Summit</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default SummitAppBar;
