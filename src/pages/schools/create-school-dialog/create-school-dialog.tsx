import React from 'react';

import { Dialog, DialogContent, DialogContentText, DialogTitle, Divider, Paper, Stack, TextField } from '@mui/material';
import { grey } from '@mui/material/colors';

import { NO_ERROR, hasError } from './form-utils';

interface CreateSchoolDialogProps {
  creatingUserEmail: string;
  open: boolean;
  onClose: () => void;
}

const CreateSchoolDialog: React.FC<CreateSchoolDialogProps> = ({ creatingUserEmail, open, onClose }) => {
  const [name, setName] = React.useState('');
  const [nameError, setNameError] = React.useState(NO_ERROR);

  const handleSchoolNameChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNameError(getNameError(event.target.value));
    setName(event.target.value);
  }, []);

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
        <Divider />
        <DialogContentText marginTop={2} marginBottom={1}>
          Admin
        </DialogContentText>
        <Stack direction='row'>
          <Paper sx={{ flexGrow: 1, padding: 1, textAlign: 'center', backgroundColor: grey[200], color: 'GrayText' }} elevation={0}>
            {creatingUserEmail}
          </Paper>
        </Stack>
      </DialogContent>
      {/* TODO: Add players (with validation), create button (with error handling)*/}
    </Dialog>
  );
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
