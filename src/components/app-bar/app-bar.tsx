import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { AppBar, Drawer, Grid, Toolbar, Typography } from '@mui/material';
import { Groups3 } from '@mui/icons-material';

import ProfileButton from './profile-button';
import NavigationButton from './navigation/navigation-button';
import DrawerLinks, { DrawerLink } from './navigation/drawer-links';
import { UserSession, useAuthContext } from '../../providers/auth-provider/auth-context';

const getAvailableLinks = (userSession: UserSession): DrawerLink[] => {
  const links: DrawerLink[] = [];

  if (userSession.isAuthenticated) {
    links.push({ icon: <Groups3 />, label: 'Schools', path: '/schools' });
  }

  return links;
};

interface SummitAppBarProps {
  title: string;
}

const SummitAppBar: React.FC<SummitAppBarProps> = ({ title }) => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const { userSession } = useAuthContext();
  const navigate = useNavigate();

  const handleLinkClick = React.useCallback(
    (link: string) => {
      navigate(link);
    },
    [navigate]
  );

  const links = getAvailableLinks(userSession);

  return (
    <>
      <AppBar position='sticky'>
        <Toolbar>
          <Grid container justifyContent='space-between' alignItems='center'>
            <Grid container item xs={3} alignItems='center'>
              <NavigationButton links={links} onOpenDrawerClick={() => setOpenDrawer(true)} onLinkClick={handleLinkClick} />
              <Typography variant='h6' marginLeft={1}>
                {title}
              </Typography>
            </Grid>
            <ProfileButton />
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer anchor='left' open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <DrawerLinks links={links} onLinkClick={handleLinkClick} />
      </Drawer>
    </>
  );
};

export default SummitAppBar;
