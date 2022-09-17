import React from 'react';

import Pagination from '@mui/material/Pagination';

const CustomPagination = (props) => {
  return ( 
  <Pagination count={props.count} variant="outlined" shape="rounded" /> 
  );
}
 
export default CustomPagination;