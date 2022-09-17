import React from 'react';

import { Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const CustomDate = (props) => {
  return (
    <>
      <CircleIcon/>
      <Typography variant='subtitle1' component='p'>
        {props.inner}
      </Typography>
    </>
  );
}
 
export default CustomDate;