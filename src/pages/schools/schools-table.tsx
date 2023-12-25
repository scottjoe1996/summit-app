import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { School } from '../../apis/schools-api';
import { CircularProgress, Grid, Typography } from '@mui/material';

interface SchoolsTableProps {
  schools: School[];
  loading: boolean;
}

const SchoolsTable: React.FC<SchoolsTableProps> = ({ schools, loading }) => {
  return (
    <TableContainer component={Paper}>
      {loading ? (
        <Grid container justifyContent='center' padding={20}>
          <CircularProgress />
        </Grid>
      ) : schools.length === 0 ? (
        <Grid container justifyContent='center' padding={20}>
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
