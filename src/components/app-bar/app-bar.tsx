import * as React from 'react';

import { AppBar, Grid, Toolbar, Typography } from '@mui/material';

import ProfileButton from './profile-button';
import NavigationButton from './navigation/navigation-button';
import { DrawerLink } from './navigation/drawer-links';

interface SummitAppBarProps {
  title: string;
  links: DrawerLink[];
  onOpenDrawerClick: () => void;
  onLinkClick: (path: string) => void;
}

const SummitAppBar: React.FC<SummitAppBarProps> = ({ title, links, onOpenDrawerClick, onLinkClick }) => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid container item xs={3} alignItems='center'>
            <NavigationButton links={links} onOpenDrawerClick={onOpenDrawerClick} onLinkClick={onLinkClick} />
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
