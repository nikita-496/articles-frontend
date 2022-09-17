import React from 'react';

import { Typography } from '@mui/material';

function CustomTag (props) {
  return (
    <Typography variant="subtitle1" component="p">
      {props.label}
    </Typography>
  );
}

export default CustomTag;