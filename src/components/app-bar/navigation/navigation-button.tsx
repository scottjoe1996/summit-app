import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Drawer, IconButton } from '@mui/material';
import { Groups3, Menu, Terrain } from '@mui/icons-material';

import { UserSession, useAuthContext } from '../../../providers/auth-provider/auth-context';
import DrawerLinks, { DrawerLink } from './drawer-links';

const getAvailableLinks = (userSession: UserSession): DrawerLink[] => {
  const links: DrawerLink[] = [];

  if (userSession.isAuthenticated) {
    links.push({ icon: <Groups3 />, label: 'Schools', path: '/schools' });
  }

  return links;
};

const NavigationButton: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const { userSession } = useAuthContext();
  const navigate = useNavigate();

  const handleLinkClick = React.useCallback(
    (link: string) => {
      navigate(link);
    },
    [navigate]
  );

  const links = getAvailableLinks(userSession);

  return links.length === 0 ? (
    <IconButton color='inherit' onClick={() => handleLinkClick('/')}>
      <Terrain />
    </IconButton>
  ) : (
    <>
      <IconButton color='inherit' onClick={() => setOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
        <DrawerLinks links={links} onLinkClick={handleLinkClick} />
      </Drawer>
    </>
  );
};

export default NavigationButton;
