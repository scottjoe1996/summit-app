import * as React from 'react';

import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

import { useAuthContext } from '../../providers/auth-provider/auth-context';
import ProfileActionsMenu from './profile-actions-menu';

interface SummitAppBarProps {
  title: string;
}

const SummitAppBar: React.FC<SummitAppBarProps> = ({ title }) => {
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

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Typography variant='h6'>{title}</Typography>
          {userSession.isAuthenticated ? (
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
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default SummitAppBar;
