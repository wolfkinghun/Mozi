import { useQuery } from '@tanstack/react-query';
import React from 'react'
import "react-alice-carousel/lib/alice-carousel.css";
import { getData, img_300, noPicture } from '../util';
import { CircularProgress } from '@mui/material';
import AliceCarousel from 'react-alice-carousel';

const Carousel = ({id,media_type}) => {
    const urlCredits=`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}`;
    console.log(media_type);
    
    const {data,isError,isLoading,error} = useQuery({queryKey:['credits',urlCredits],queryFn:getData})
    const responsive={
        0:{items:3},
        512:{items:5},
        1024:{items:7}
    }
    if(isLoading ){
        return <CircularProgress />   
        }
        if(isError ){
            return <div>Error fetching data: {error.message}</div>   
        }
        console.log(data);
    const items = data.cast.map(obj=>(
        <div  className='carousel_container'>
            <img className='carousel_img' src={obj.profile_path? img_300+obj.profile_path : noPicture} alt={obj?.name} />
            <b  className='carousel_name'>{obj?.name}</b>
        </div>
    ))
        
  return (
    <div>
      <AliceCarousel
      autoPlay
      mouseTracking
      infinite
        disableButtonsControls
        disableDotsControls
        responsive={responsive}
        items={items}
      />
    </div>
  )
}

export default Carousel
