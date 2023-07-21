import React from "react";

// material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MovieCard({ movie }) {

  const handleCardClick = () => {
    
  } // end handleCardClick




  return (
    <>
      <Card sx={{ m:'12px 10px', width: 250, height: 350 }}>
        <CardActionArea onClick={handleCardClick}>
          <CardMedia
            component="img"
            height="140"
            image={movie.poster}
            alt={movie.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    </>
  );
}
