import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getData } from '../util'
import { CircularProgress, Stack } from '@mui/material'

import { useState } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import { SingleChip } from './SingleChip'
import { useEffect } from 'react'

export const Genres = ({type,setUrlForGenres}) => {
    const [setGenres, setSelectedGenres] = useState([])

    useEffect(()=>{
      if(setGenres.length<1) setUrlForGenres('')
        else setUrlForGenres(setGenres.join(','))
    },[setGenres])

    console.log(setGenres)
    const urlGenres=`https://api.themoviedb.org/3/genre/${type}/list?api_key=${import.meta.env.VITE_API_KEY}`
  //  console.log(urlGenres);
  const {data,isError,error,isLoading}=useQuery({queryKey:['genres',urlGenres],queryFn:getData})
     if(isLoading){
        return <CircularProgress />   
    }
    if(isError){
        return <div>Error fetching data: {error.message}</div>   
    }
    console.log(data.genres);
  return (
    <div>
        <Stack direction="row" spacing={1}> {data.genres.map(obj=><SingleChip key={obj.id} {...obj} setGenres={setGenres} setSelectedGenres={setSelectedGenres}/>)}</Stack>

    </div>
  )
}
