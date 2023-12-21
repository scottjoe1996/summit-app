import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { CssBaseline } from '@mui/material';

import App from './app.tsx';
import { AuthProvider } from './providers/auth-provider/auth-provider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </CssBaseline>
  </React.StrictMode>
);
