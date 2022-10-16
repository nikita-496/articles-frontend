import React from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';

const drawerWidth = 240;

const Sidebar = (props) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor={props.anchor}
      >
        <ul>
          {props.owner}
          {props.list}
        </ul>
      </Drawer>

    </Box>
  );
}
 
export default Sidebar;