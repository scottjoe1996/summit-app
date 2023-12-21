import * as React from 'react';

import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

import { useAuthContext } from '../../providers/auth-provider/auth-context';

const SummitAppBar: React.FC = () => {
  const { userSession, loginWithRedirect } = useAuthContext();

  const handleLogin = React.useCallback(() => {
    void loginWithRedirect();
  }, [loginWithRedirect]);

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Typography variant='h6'>Summit</Typography>
          {userSession.isAuthenticated ? (
            <IconButton color='inherit'>
              <AccountCircle />
            </IconButton>
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
