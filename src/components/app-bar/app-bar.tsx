import * as React from 'react';

import { AppBar, Grid, Toolbar, Typography } from '@mui/material';

import ProfileButton from './profile-button';

interface SummitAppBarProps {
  title: string;
}

const SummitAppBar: React.FC<SummitAppBarProps> = ({ title }) => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Typography variant='h6'>{title}</Typography>
          <ProfileButton />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default SummitAppBar;
