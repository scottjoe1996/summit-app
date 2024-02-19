import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAuthContext } from './providers/auth-provider/auth-context';
import { ProtectedRoute } from './providers/auth-provider/protected-route';
import Page from './pages/page';
import LoadingPage from './pages/loading-page';
import ErrorPage from './pages/error-page';
import HomePage from './pages/home/home-page';
import SchoolsPage from './pages/schools/schools-page';
import NotFoundPage from './pages/not-found-page';
import SchoolPage from './pages/school/school-page';

const App: React.FC = () => {
  const { isLoading, error } = useAuthContext();

  return isLoading ? (
    <LoadingPage />
  ) : error ? (
    <Page title='Summit' content={<ErrorPage />} />
  ) : (
    <Routes>
      <Route index element={<Page title='Summit' content={<HomePage />} />} />
      <Route path='/schools'>
        <Route index element={<ProtectedRoute page={(user) => <Page title='Schools' content={<SchoolsPage user={user} />} />} />} />
        <Route path='/schools/:schoolId' element={<ProtectedRoute page={() => <Page title='Schools' content={<SchoolPage />} />} />} />
      </Route>
      <Route path='*' element={<Page title='Summit' content={<NotFoundPage />} />} />
    </Routes>
  );
};

export default App;
