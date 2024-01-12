import React from 'react';
import { validate } from 'email-validator';

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Stack, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';

import { ApiResponse } from '../../../apis/schools-api';

import { NO_ERROR, hasError } from './form-utils';
import PlayerTile from './player-tile';

interface CreateSchoolDialogProps {
  creatingUserEmail: string;
  open: boolean;
  onClose: () => void;
  onSchoolCreatedSuccessfully: () => void;
  createSchool: (name: string, admin: string, players: string[]) => Promise<ApiResponse<string>>;
}

const CreateSchoolDialog: React.FC<CreateSchoolDialogProps> = ({ creatingUserEmail, open, onClose, onSchoolCreatedSuccessfully, createSchool }) => {
  const [totalPlayers, setTotalPlayers] = React.useState<string[]>([]);
  const [playerEmail, setPlayerEmail] = React.useState('');
  const [playerEmailError, setPlayerEmailError] = React.useState(NO_ERROR);
  const [name, setName] = React.useState('');
  const [nameError, setNameError] = React.useState(NO_ERROR);
  const [creatingSchool, setCreatingSchool] = React.useState(false);

  const handleSchoolNameChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNameError(getNameError(event.target.value));
    setName(event.target.value);
  }, []);

  const handlePlayerChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setPlayerEmailError(getPlayerError(event.target.value, [...totalPlayers, creatingUserEmail]));
      setPlayerEmail(event.target.value);
    },
    [creatingUserEmail, totalPlayers]
  );

  const handleAddPlayer = React.useCallback((newPlayer: string) => {
    setTotalPlayers((oldPlayers) => [...oldPlayers, newPlayer]);
    setPlayerEmail('');
    setNameError(NO_ERROR);
  }, []);

  const handleRemovePlayer = React.useCallback((playerToRemove: string) => {
    setTotalPlayers((oldPlayers) => {
      const newPlayers = [...oldPlayers];
      newPlayers.splice(oldPlayers.indexOf(playerToRemove), 1);

      return newPlayers;
    });
  }, []);

  const handleCreateSchool = React.useCallback(() => {
    setCreatingSchool(true);
    void createSchool(name, creatingUserEmail, totalPlayers).then((response) => {
      setCreatingSchool(false);

      if (response.hasError) {
        // TODO: error handling
      }

      onSchoolCreatedSuccessfully();
    });
  }, [createSchool, creatingUserEmail, name, onSchoolCreatedSuccessfully, totalPlayers]);

  const cannotAddPlayer = hasError(playerEmailError);
  const schoolNameHasError = hasError(nameError);

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Create school</DialogTitle>
      <DialogContent>
        <TextField
          label='Name'
          placeholder='The name of the school'
          fullWidth
          value={name}
          onChange={handleSchoolNameChange}
          helperText={nameError}
          variant='filled'
          error={hasError(nameError)}
        />
        <DialogContentText marginTop={1} marginBottom={1}>
          Admin
        </DialogContentText>
        <Stack>
          <PlayerTile email={creatingUserEmail} />
        </Stack>
        <DialogContentText marginTop={3} marginBottom={1}>
          Players
        </DialogContentText>
        <Stack direction='column' marginBottom={1} spacing={1}>
          {totalPlayers.map((playerEmail, index) => (
            <PlayerTile key={index} email={playerEmail} onRemove={() => handleRemovePlayer(playerEmail)} />
          ))}
        </Stack>
        <Grid container alignItems='center'>
          <Grid item xs>
            <TextField
              fullWidth
              label='Email'
              placeholder='Email of player'
              value={playerEmail}
              helperText={playerEmailError}
              onChange={handlePlayerChange}
              variant='filled'
              error={cannotAddPlayer}
            />
          </Grid>
          <Grid item>
            <IconButton sx={{ marginLeft: 1, marginBottom: 2.5 }} onClick={() => handleAddPlayer(playerEmail)} disabled={cannotAddPlayer || playerEmail === ''}>
              <Add />
            </IconButton>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ padding: 3 }}>
        <LoadingButton disabled={name === '' || schoolNameHasError} loading={creatingSchool} variant='contained' onClick={handleCreateSchool}>
          Create
        </LoadingButton>
      </DialogActions>
      {/* TODO: with error handling*/}
    </Dialog>
  );
};

const getPlayerError = (playerEmail: string, totalPlayers: string[]): string => {
  if (!validate(playerEmail)) {
    return 'Player email needs to be in the correct format';
  }

  if (totalPlayers.includes(playerEmail)) {
    return 'Cannot add the same player twice';
  }

  return NO_ERROR;
};

const getNameError = (name: string): string => {
  if (name.startsWith(' ')) {
    return 'School name cannot start with an empty space';
  }

  if (name.trim().length === 0) {
    return 'School name cannot be empty';
  }

  const maxLength = 64;
  if (name.length > maxLength) {
    return `School name cannot have more than ${maxLength} characters`;
  }

  return NO_ERROR;
};

export default CreateSchoolDialog;
