import React from 'react';

import Pagination from '@mui/material/Pagination';

const CustomPagination = (props) => {
  return ( 
  <Pagination count={props.count} page={props.page} onChange={(_, num) => props.setPage(num)} variant="outlined" shape="rounded" /> 
  );
}
 
export default CustomPagination;