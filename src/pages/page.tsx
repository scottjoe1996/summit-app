import React from 'react';
import SummitAppBar from '../components/app-bar/app-bar';
import { Container } from '@mui/material';

interface PageProps {
  title: string;
  content: React.ReactElement;
}

const Page: React.FC<PageProps> = ({ title, content }) => {
  return (
    <>
      <SummitAppBar title={title} />
      <Container sx={{ paddingTop: 2 }}>{content}</Container>
    </>
  );
};

export default Page;
