import React from 'react';

import SummitAppBar from './components/app-bar/app-bar';
import { useAuthContext } from './providers/auth-provider/auth-context';

const App: React.FC = () => {
  const { isLoading } = useAuthContext();

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <SummitAppBar />
      <h1>Summit App</h1>
    </>
  );
};

export default App;
