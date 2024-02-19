import React from 'react';
import { useParams } from 'react-router-dom';

const SchoolPage: React.FC = () => {
  const params = useParams<'schoolId'>();

  return <h1>{`School page for ${params.schoolId}`}</h1>;
};

export default SchoolPage;
