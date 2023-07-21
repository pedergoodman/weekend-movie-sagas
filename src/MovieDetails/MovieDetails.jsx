import { Button } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'


export default function MovieDetails() {
  const {paramsInfo} = useParams()
  
  console.log('paramsInfo is', paramsInfo);
  return (
    <div>
      <pre>{paramsInfo}</pre>
      <img src="" alt="" />
      <div>
        <h1>MOVIE TITLE</h1>
        <p>description</p>
        <p>genres</p>
      </div>
      <Button>Back to list</Button>
    </div>
  )
}
