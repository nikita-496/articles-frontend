import React from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const CustomSelect = (props) => {
  const handleChange = (evt) => {
    props.setSortСriteria(evt.target.value)
  }
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.sorted}
          label={props.label}
          onChange={handleChange}
        >
            {
              props.options.map(option => 
              <MenuItem value={option} key={option}>{option}</MenuItem>
              )
            }
        </Select>
      </FormControl>
    </Box>
  );
}

export default CustomSelect;