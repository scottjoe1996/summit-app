import React from 'react';

import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Terrain } from '@mui/icons-material';

export interface DrawerLink {
  icon: React.ReactElement;
  label: string;
  path: string;
}

interface DrawerLinksProps {
  links: DrawerLink[];
  onLinkClick: (path: string) => void;
}

const DrawerLinks: React.FC<DrawerLinksProps> = ({ links, onLinkClick }) => {
  const currentPath = window.location.pathname;

  return (
    <>
      <List sx={{ width: 240 }}>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onLinkClick('/')} selected={currentPath === '/'}>
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
            <ListItemButton onClick={() => onLinkClick(link.path)} selected={currentPath === link.path}>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default DrawerLinks;
