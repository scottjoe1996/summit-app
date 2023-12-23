import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { School } from '../../apis/schools-api';

interface SchoolsTableProps {
  schools: School[];
}

const SchoolsTable: React.FC<SchoolsTableProps> = ({ schools }) => {
  return (
    <TableContainer component={Paper}>
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
    </TableContainer>
  );
};

export default SchoolsTable;
