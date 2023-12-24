import React from 'react';

import { IconButton, useMediaQuery, useTheme } from '@mui/material';
import { Menu, Terrain } from '@mui/icons-material';

import { DrawerLink } from './drawer-links';

interface NavigationButton {
  links: DrawerLink[];
  onLinkClick: (path: string) => void;
  onOpenDrawerClick: () => void;
}

const NavigationButton: React.FC<NavigationButton> = ({ links, onLinkClick, onOpenDrawerClick }) => {
  const theme = useTheme();
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('md'));

  return links.length === 0 || isDesktopScreen ? (
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
