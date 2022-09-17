import React from 'react';

import { Typography } from '@mui/material';

const TextContent = (props) => {
  return (
    <>
      <Typography variant='h2'>
        {props.title}
      </Typography>
      <Typography variant='body1'>
        {props.body}
      </Typography>
    </>
  );
}
 
export default TextContent;