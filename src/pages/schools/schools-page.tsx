import React from 'react';

import { School, SchoolsApi } from '../../apis/schools-api';

import SchoolsTable from './schools-table';

const schoolsApi = new SchoolsApi();

const SchoolsPage: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);
  const [schools, setSchools] = React.useState<School[]>([]);

  React.useEffect(() => {
    void schoolsApi.getSchools().then((result) => {
      setLoading(false);

      if (result.hasError) {
        setHasError(true);
        return;
      }

      setSchools(result.data);
    });
  }, []);

  return <SchoolsTable schools={schools} loading={loading} hasError={hasError} />;
};

export default SchoolsPage;
