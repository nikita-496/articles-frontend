import React from 'react';

import { TextField } from '@mui/material';

const CustomInput = (props) => {
  return (
    <TextField
      fullWidth
      type={props.type}
      name={props.name}
      label={props.label}
      value={props.value || ''}
      onChange={props.changed}
    ></TextField>
  );
};

export default CustomInput;
