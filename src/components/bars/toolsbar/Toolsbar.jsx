import React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { Typography } from '@mui/material';

const Toolsbar = (props) => {
  return (
    <>
      <Tooltip title='Delete'>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Typography variant='subtitle1' component='p'>
        {props.count}
      </Typography>
    </>
  );
};

export default Toolsbar;
