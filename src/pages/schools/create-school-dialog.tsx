import React from 'react';

import { Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';

interface CreateSchoolDialogProps {
  open: boolean;
  onClose: () => void;
}

const CreateSchoolDialog: React.FC<CreateSchoolDialogProps> = ({ open, onClose }) => {
  const [name, setName] = React.useState('');

  const handleSchoolNameChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setName(event.target.value);
  }, []);

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Create school</DialogTitle>
      <DialogContent>
        <TextField label='Name' placeholder='The name of the school' fullWidth value={name} onChange={handleSchoolNameChange} variant='filled' />
      </DialogContent>
      {/* TODO: School name validation, Add players (with validation), create button (with error handling)*/}
    </Dialog>
  );
};

export default CreateSchoolDialog;
