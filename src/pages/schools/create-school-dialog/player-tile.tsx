import React from 'react';

import { Paper } from '@mui/material';
import { grey } from '@mui/material/colors';

interface PlayerTileProps {
  email: string;
}

const PlayerTile: React.FC<PlayerTileProps> = ({ email }) => {
  return (
    <Paper sx={{ flexGrow: 1, padding: 1, textAlign: 'center', backgroundColor: grey[200], color: 'GrayText' }} elevation={0}>
      {email}
    </Paper>
  );
};

export default PlayerTile;
