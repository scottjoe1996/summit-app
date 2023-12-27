import React from 'react';

import { Button, Dialog, DialogTitle, Grid } from '@mui/material';

import { School, SchoolsApi } from '../../apis/schools-api';

import SchoolsTable from './schools-table';

const schoolsApi = new SchoolsApi();

const SchoolsPage: React.FC = () => {
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
      <Dialog open={openSchoolDialog} onClose={() => setOpenSchoolDialog(false)}>
        <DialogTitle>Create school</DialogTitle>
        {/* TODO */}
      </Dialog>
    </>
  );
};

export default SchoolsPage;
