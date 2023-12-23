import * as React from 'react';

import { AppBar, Grid, Toolbar, Typography } from '@mui/material';

import ProfileButton from './profile-button';
import NavigationButton from './navigation/navigation-button';

interface SummitAppBarProps {
  title: string;
}

const SummitAppBar: React.FC<SummitAppBarProps> = ({ title }) => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid container item xs={3} alignItems='center'>
            <NavigationButton />
            <Typography variant='h6' marginLeft={1}>
              {title}
            </Typography>
          </Grid>
          <ProfileButton />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default SummitAppBar;
