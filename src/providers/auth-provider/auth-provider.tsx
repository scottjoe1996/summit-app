import React from 'react';

import { Auth0Provider } from '@auth0/auth0-react';

import { CONFIG } from '../../config/config';

export const AuthProvider: React.FunctionComponent<{ children: React.ReactElement }> = ({ children }) => {
  return (
    <Auth0Provider
      domain={CONFIG.auth0Config.domain}
      clientId={CONFIG.auth0Config.clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      useRefreshTokens
      cacheLocation='localstorage'
    >
      {children}
    </Auth0Provider>
  );
};
