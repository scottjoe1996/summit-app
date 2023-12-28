import React from 'react';

import { Grid, IconButton, Paper } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Close } from '@mui/icons-material';

interface PlayerTileProps {
  email: string;
  onRemove?: () => void;
}

const PlayerTile: React.FC<PlayerTileProps> = ({ email, onRemove }) => {
  return (
    <Grid container>
      <Grid item xs>
        <Paper sx={{ padding: 1, textAlign: 'center', backgroundColor: grey[200], color: 'GrayText' }} elevation={0}>
          {email}
        </Paper>
      </Grid>
      {onRemove && (
        <Grid item>
          <IconButton sx={{ marginLeft: 1 }} onClick={onRemove}>
            <Close />
          </IconButton>
        </Grid>
      )}
    </Grid>
  );
};

export default PlayerTile;
