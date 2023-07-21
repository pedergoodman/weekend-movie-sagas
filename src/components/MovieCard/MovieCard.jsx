import React from "react";


// material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function MovieCard({ movie }) {

  const history = useHistory();



  const handleCardClick = () => {
    history.push(`/${movie.id}`)
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
