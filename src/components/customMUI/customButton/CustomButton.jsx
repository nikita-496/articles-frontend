import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ inner }) => {
  return (
    <Button variant='contained' type='submit'>
      {inner}
    </Button>
  );
};

export default CustomButton;
