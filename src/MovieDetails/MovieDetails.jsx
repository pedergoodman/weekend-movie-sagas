import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'



export default function MovieDetails() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const movieDetails = useSelector(store => store.movieDetails)



  useEffect(() => {
    dispatch({
      type: 'FETCH_MOVIE_DETAILS',
      payload: id
    })
  }, [])
  
  console.log('useParams is', useParams());
  console.log('movieDetails is', movieDetails);
  return (
    <div>
      <pre>{id}</pre>
      <pre>{JSON.stringify(movieDetails)}</pre>
      <img src={movieDetails.poster} alt={movieDetails.title} />
      <div>
        <h1>{movieDetails.title}</h1>
        <p>{movieDetails.description}</p>
        <p>{movieDetails.genres}</p>
      </div>
      <Button>Back to list</Button>
    </div>
  )
}
