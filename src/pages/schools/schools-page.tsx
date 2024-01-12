import React from 'react';

import { Button, Grid } from '@mui/material';

import { School, SchoolsApi } from '../../apis/schools-api';
import { User } from '../../providers/auth-provider/auth-context';

import SchoolsTable from './schools-table';
import CreateSchoolDialog from './create-school-dialog/create-school-dialog';

const schoolsApi = new SchoolsApi();

interface SchoolsPageProps {
  user: User;
}

const SchoolsPage: React.FC<SchoolsPageProps> = ({ user }) => {
  const [openSchoolDialog, setOpenSchoolDialog] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);
  const [schools, setSchools] = React.useState<School[]>([]);

  const fetchSchools = React.useCallback(() => {
    setLoading(true);
    setHasError(false);

    void schoolsApi.getSchools().then((result) => {
      setLoading(false);

      if (result.hasError) {
        setHasError(true);
        return;
      }

      setSchools(result.data);
    });
  }, []);

  const handleSchoolCreated = React.useCallback(() => {
    setOpenSchoolDialog(false);
    void fetchSchools();
  }, [fetchSchools]);

  React.useEffect(() => {
    fetchSchools();
  }, [fetchSchools]);

  return (
    <>
      {!hasError && !loading && (
        <Grid paddingBottom={1} container justifyContent='flex-end'>
          <Button variant='contained' onClick={() => setOpenSchoolDialog(true)}>
            Create school
          </Button>
        </Grid>
      )}
      <SchoolsTable schools={schools} loading={loading} hasError={hasError} onRetry={fetchSchools} />
      <CreateSchoolDialog
        creatingUserEmail={user.email}
        open={openSchoolDialog}
        createSchool={(name, admin, players) => schoolsApi.createSchool(name, admin, players)}
        onClose={() => setOpenSchoolDialog(false)}
        onSchoolCreatedSuccessfully={handleSchoolCreated}
      />
    </>
  );
};

export default SchoolsPage;
