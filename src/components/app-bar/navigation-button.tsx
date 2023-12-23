import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Groups3, Menu, Terrain } from '@mui/icons-material';

import { UserSession, useAuthContext } from '../../providers/auth-provider/auth-context';

interface DrawerLink {
  icon: React.ReactElement;
  label: string;
  path: string;
}

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
  const currentPath = window.location.pathname;

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
        <List sx={{ width: 240 }}>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleLinkClick('/')} selected={currentPath === '/'}>
              <ListItemIcon>
                <Terrain />
              </ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List sx={{ width: 240 }}>
          {links.map((link, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => handleLinkClick(link.path)} selected={currentPath === link.path}>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default NavigationButton;
