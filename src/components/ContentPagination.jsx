import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const  ContentPagination=({page,setPage,numberOfPage})=> {
  
    const handleChange=(event,p)=>{
        console.log('oldal',p);
        setPage(p)
        
    }

    return (
    <Stack spacing={2} style={{border:"red 2px solid", backgroundColor:"gray", padding:"4px"}}>
      {/* <Pagination count={10} shape="rounded" /> */}
      <Pagination  color='primary' count={numberOfPage} page={page} variant="outlined" shape="rounded" onChange={handleChange} />
        
    </Stack>
  );
}   