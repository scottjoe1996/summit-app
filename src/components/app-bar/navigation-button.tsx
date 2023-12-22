import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Map, Menu } from '@mui/icons-material';

const NavigationButton: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleRoadMapClick = React.useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <>
      <IconButton color='inherit' onClick={() => setOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 240 }}>
          <ListItem disablePadding>
            <ListItemButton onClick={handleRoadMapClick}>
              <ListItemIcon>
                <Map />
              </ListItemIcon>
              <ListItemText primary={'Roadmap'} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </>
  );
};

export default NavigationButton;
