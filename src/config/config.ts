interface Config {
  auth0Config: { domain: string; clientId: string };
}

export const CONFIG: Config = { auth0Config: { domain: process.env.REACT_APP_AUTH0_DOMAIN!, clientId: process.env.REACT_APP_AUTH0_CLIENT_ID! } };
