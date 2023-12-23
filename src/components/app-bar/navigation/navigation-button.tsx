import React from 'react';

import { IconButton } from '@mui/material';
import { Menu, Terrain } from '@mui/icons-material';

import { DrawerLink } from './drawer-links';

interface NavigationButton {
  links: DrawerLink[];
  onLinkClick: (path: string) => void;
  onOpenDrawerClick: () => void;
}

const NavigationButton: React.FC<NavigationButton> = ({ links, onLinkClick, onOpenDrawerClick }) => {
  return links.length === 0 ? (
    <IconButton color='inherit' onClick={() => onLinkClick('/')}>
      <Terrain />
    </IconButton>
  ) : (
    <>
      <IconButton color='inherit' onClick={onOpenDrawerClick}>
        <Menu />
      </IconButton>
    </>
  );
};

export default NavigationButton;
