import React from 'react';

import { AccountCircle, Logout } from '@mui/icons-material';
import { Divider, ListItemIcon, Menu, MenuItem } from '@mui/material';

interface ProfileActionsMenuProps {
  userEmail: string;
  open: boolean;
  anchorEl: null | HTMLElement;
  onClose: () => void;
  onLogout: () => void;
}

const ProfileActionsMenu: React.FC<ProfileActionsMenuProps> = ({ userEmail, open, anchorEl, onClose, onLogout }) => {
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
      <MenuItem disabled>
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        {userEmail}
      </MenuItem>
      <Divider />
      <MenuItem onClick={onLogout}>
        <ListItemIcon>
          <Logout fontSize='small' />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};

export default ProfileActionsMenu;
