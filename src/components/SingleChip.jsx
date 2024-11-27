import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CheckIcon from '@mui/icons-material/Check';
import { RadioButtonChecked } from '@mui/icons-material';
import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react';

export const SingleChip=({setSelectedGenres,id,name,setGenres})=> {
    
    const [selected,setSelected]=useState("false")
    const handleClick=()=>{
        setSelected(!selected)
        if(setGenres.indexOf(id)==-1){
            setSelectedGenres(prev=>[...prev,id])
        }else{
            setSelectedGenres(prev=>[...prev.filter(item=>item!=id)])
        }
    }

  return (
    // <Stack direction="row" spacing={1}>
    //   <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
    //   <Chip
    //     avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
    //     label="Avatar"
    //     variant="outlined"
    //   />
    // </Stack>
    <Chip icon={selected ? <RadioButtonChecked/> :  <DoneIcon/> } label={name} clickable onClick={handleClick}/>
  );
}