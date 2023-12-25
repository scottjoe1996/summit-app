import React from 'react';

import { School, SchoolsApi } from '../../apis/schools-api';

import SchoolsTable from './schools-table';

const schoolsApi = new SchoolsApi();

const SchoolsPage: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const [schools, setSchools] = React.useState<School[]>([]);

  React.useEffect(() => {
    void schoolsApi.getSchools().then((schools) => {
      setLoading(false);
      setSchools(schools);
    });
  }, []);

  return <SchoolsTable schools={schools} loading={loading} />;
};

export default SchoolsPage;
