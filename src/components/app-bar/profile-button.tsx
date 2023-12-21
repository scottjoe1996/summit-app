import React from 'react';

import { AccountCircle } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';

import { useAuthContext } from '../../providers/auth-provider/auth-context';

import ProfileActionsMenu from './profile-actions-menu';

const ProfileButton: React.FC = () => {
  const { userSession, loginWithRedirect, logout } = useAuthContext();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openActionsMenu = Boolean(anchorEl);

  const handleProfileClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogin = React.useCallback(() => {
    void loginWithRedirect();
  }, [loginWithRedirect]);

  const handleLogout = React.useCallback(() => {
    void logout();
  }, [logout]);

  return userSession.isAuthenticated ? (
    <>
      <IconButton color='inherit' onClick={handleProfileClick}>
        <AccountCircle />
      </IconButton>
      <ProfileActionsMenu
        anchorEl={anchorEl}
        open={openActionsMenu}
        userEmail={userSession.user.email}
        onClose={() => setAnchorEl(null)}
        onLogout={handleLogout}
      />
    </>
  ) : (
    <Button color='inherit' onClick={handleLogin}>
      Sign in
    </Button>
  );
};

export default ProfileButton;
