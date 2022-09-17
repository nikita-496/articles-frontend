import React from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { proposalSyntaxPlugins } from '@babel/preset-env/lib/shipped-proposals';


const CustomSelect = (props) => {
    //const [age, setAge] = React.useState('');

  /*const handleChange = (event) => {
    setAge(event.target.value);
  };*/

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.label}
          label={props.label}
        >
          <ul>
            {
              props.options.map(option => 
              <li key={option}>
                <MenuItem value={option}>{option}</MenuItem>
              </li>
              )
            }
          </ul>
        </Select>
      </FormControl>
    </Box>
  );
}

export default CustomSelect;