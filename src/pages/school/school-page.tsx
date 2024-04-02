import React from 'react';
import { useParams } from 'react-router-dom';

import { LineChart } from '@mui/x-charts';

import { School, SchoolsApi } from '../../apis/schools-api';

import { SchoolGraphData, formatSchoolGraphData } from './school-data-formatter';

const schoolsApi = new SchoolsApi();

type SchoolResponse =
  | { loading: true }
  | { loading: false; hasError: true }
  | { loading: false; hasError: false; school: School; schoolGraphData: SchoolGraphData };

const SchoolPage: React.FC = () => {
  const schoolId = useParams<'schoolId'>().schoolId as string;

  const [schoolResponse, setSchoolResponse] = React.useState<SchoolResponse>({ loading: true });

  React.useEffect(() => {
    void schoolsApi.getSchool(schoolId).then((result) => {
      if (result.hasError) {
        setSchoolResponse({ loading: false, hasError: true });
        return;
      }

      setSchoolResponse({ loading: false, hasError: false, school: result.data, schoolGraphData: formatSchoolGraphData(result.data) });
    });
  }, [schoolId]);

  return schoolResponse.loading ? (
    <p>LOADING</p>
  ) : schoolResponse.hasError ? (
    <p>ERROR</p>
  ) : (
    <>
      <h1>{`School page for ${schoolResponse.school.name}`}</h1>
      <LineChart height={500} series={schoolResponse.schoolGraphData.dataPoints} xAxis={[{ scaleType: 'point', data: schoolResponse.schoolGraphData.dates }]} />
    </>
  );
};

export default SchoolPage;
