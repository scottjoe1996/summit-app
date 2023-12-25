import React from 'react';

import { CircularProgress, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

import { School } from '../../apis/schools-api';
import { Replay } from '@mui/icons-material';

interface SchoolsTableProps {
  schools: School[];
  loading: boolean;
  hasError: boolean;
  onRetry: () => void;
}

const SchoolsTable: React.FC<SchoolsTableProps> = ({ schools, loading, hasError, onRetry }) => {
  return (
    <TableContainer component={Paper}>
      {loading ? (
        <Grid container justifyContent='center' paddingTop={20} paddingBottom={20}>
          <CircularProgress />
        </Grid>
      ) : hasError ? (
        <Grid container justifyContent='center' alignItems='center' paddingTop={20} paddingBottom={20} direction='column'>
          <IconButton onClick={onRetry}>
            <Replay />
          </IconButton>
          <Typography color='GrayText'>Failed to fetch schools, please retry.</Typography>
        </Grid>
      ) : schools.length === 0 ? (
        <Grid container justifyContent='center' paddingTop={20} paddingBottom={20}>
          <Typography variant='overline' color='GrayText'>
            You are not a member of any Schools
          </Typography>
        </Grid>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='right'>Players</TableCell>
              <TableCell align='right'>Games</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schools.map((school) => (
              <TableRow key={school.id}>
                <TableCell component='th' scope='row'>
                  {school.name}
                </TableCell>
                <TableCell align='right'>{school.totalPlayers}</TableCell>
                <TableCell align='right'>{school.totalGames}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default SchoolsTable;
