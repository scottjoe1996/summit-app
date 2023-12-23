import React from 'react';

import { School, SchoolsApi } from '../../apis/schools-api';

import SchoolsTable from './schools-table';

const schoolsApi = new SchoolsApi();

const SchoolsPage: React.FC = () => {
  const [schools, setSchools] = React.useState<School[]>([]);

  React.useEffect(() => {
    void schoolsApi.getSchools().then((schools) => {
      setSchools(schools);
    });
  }, []);

  return <SchoolsTable schools={schools} />;
};

export default SchoolsPage;
