import { Button, IconButton, TextField } from '@mui/material';
import React from 'react'

import SearchIcon from "@mui/icons-material/Search";

import { Search } from '../components/Search';
import { useState } from 'react';

// const [searcMovies, setSearchMovies] = useState(true);
// const [searcSeries, setSearchSeries] = useState(false);

// const urlSeries=`https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_API_KEY}`
// const urlMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}`

// const moviesClick=()=>{
//   setSearchMovies(open=>!open)
//   if(searchSeries == true){
//     setSearchSeries(false)
//   }
// }

// const seriesClick=()=>{
//   setSearchSeries(open=>!open)
//   if(setSearchMovies == true){
//     setSearchMovies(false)
//   }  
// }

export const SearchPage = () => (

  <form className='searchPage'>
    <span>
 <TextField
  id="search-bar"
  className="text"
  // onInput={(e) => { setSearchQuery(e.target.value); }}
  label=""
  variant="outlined"
  placeholder="Search..."
  size="small"
  style={{
    backgroundColor: "white", // Set background color to white
    color: "black", // Set text color to black
    borderColor: "white", // Set border to white
  }}
  InputProps={{
    style: {
      color: "black", // Text color inside the input
    },
  }}
  InputLabelProps={{
    style: {
      color: "black", // Placeholder and label color
    },
  }}
/>
    <IconButton onClick={<Search/>} type="submit" aria-label="search">
      <SearchIcon  style={{ fill: "blue" }} />
    </IconButton>
    <b/>
    </span>
    <span className='button_search'>
    <Button variant="outlined" size="medium" >
      SEARCH MOVIES
    </Button>
    ‎ 
    ‎ 
    ‎ 
    <Button variant="outlined" size="medium" className='button_search'>
      SEARCH TV SERIES
    </Button>
    </span>
  </form>
  
);
