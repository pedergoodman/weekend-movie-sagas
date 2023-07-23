import React, { useState } from "react";


// material UI
import Card from "@mui/material/Card";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { CardActionArea } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './MovieCard.css'



export default function MovieCard({ movie }) {
  const history = useHistory();
  const [isHovered, setIsHovered] = useState(false)

  const handleCardClick = () => {
    history.push(`/details/${movie.movie_id}/${movie.title}`);
  }; // end handleCardClick

  const cardTitleSX = {
    textAlign: 'center', 
    zIndex: 1,
    background: 'rgba(0, 0, 0, 0.7)', 
    boxShadow: '0 0 10px 10px rgba(0, 0, 0, 0.7)',

  }

  const cardContainerSX = { 
    m: "12px 10px", 
    width: 250, 
    height: 350, 
    boxShadow: '0 0 5px 0px #ffffff80', 
    '&:hover': {
      boxShadow: '0px 0px 8px 1px #ffffff6b' 
    }
  }

  const handleMouseOver = () => {
    setIsHovered(true)
  }
  
  const handleMouseOut = () => {
    setIsHovered(false)
  }


  return (
    <>
      <Card sx={cardContainerSX}>
        <CardActionArea
          sx={{ width: "100%", height: "100%" }}
          onClick={handleCardClick}
          onMouseOver={ handleMouseOver }
          onMouseOut={ handleMouseOut }
        >
          {isHovered ? <ImageListItemBar
            sx={cardTitleSX}
            title={movie.title}
            subtitle={movie.genres}
          /> : <></> }
          <ImageListItem>
            <img src={movie.poster} alt={movie.title} loading="lazy" />
          </ImageListItem>
        </CardActionArea>
      </Card>
    </>
  );
}
