import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getData } from '../util'
import { CircularProgress } from '@mui/material'
import { SingleContent } from './SingleContent'
import { useState } from 'react'
import { ContentPagination } from './ContentPagination'


export const Content = ({url,type}) => {
  const [page,setPage]=useState(1)
    const {isLoading,isError,error,data}=useQuery({queryKey:['trendings',url+"&page="+page],queryFn:getData})
    if(isLoading){
        return <CircularProgress />   
    }
    if(isError){
        return <div>Error fetching data: {error.message}</div>   
    }
    console.log(data.results,data.total_pages);
    
    return (
    <div className='mejem'>
      {data.results.map(obj=>
        <SingleContent className="singleCont" key={obj.id} {...obj} type={type} />
      )}
      <ContentPagination page={page} setPage={setPage} numberOfPage={data.total_pages}/>
    </div>
  )
}
