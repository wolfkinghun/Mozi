import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { img_300, imgUnavailable } from '../util';
import { CardActionArea } from '@mui/material';
import { DetailModal } from './DetailModal';

export const SingleContent=({id,poster_path,title,name,overview,vote_average,relase_date,first_air_date,media_type,type})=> {
  const [open, setOpen] = React.useState(false);
 
  return (
    <>
    <Card sx={{ maxWidth: 345 }} style={{margin:"10px"}} className='card'>
      <CardActionArea onClick={ () => setOpen(true)} >
      <CardMedia
        sx={{ height: 400, width:300} }
        image={poster_path ? img_300+poster_path : imgUnavailable}
        title={title||name}
      />
      <CardContent style={{height:"55px"}}>
        <Typography gutterBottom variant="h5" component="div">
        {title||name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', display:'flex', justifyContent:'space-between' }}>
        <span>
          {media_type}
        </span>
        <span>
          {
            relase_date || first_air_date
          }
        </span>
       
        </Typography>
       </CardContent>
       <span style={{position:'absolute',top:0,right:0,color:'white', borderRadius:'50%', padding:"2px"}}>{vote_average}</span>
   
       </CardActionArea>
      {/* <CardActions>
        <Button size="small">Share</Button>
      </CardActions> */}
    </Card>
    {open&& <DetailModal open={open} setOpen={setOpen} id={id} type={media_type||type}  media_type={media_type} />}
    </>

  );
}