import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./MovieDetails";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetails = useSelector(store => store.movieDetails);

  useEffect(() => {
    dispatch({
      type: "FETCH_MOVIE_DETAILS",
      payload: id,
    });
  }, []);

  console.log("useParams is", useParams());
  console.log("movieDetails is", movieDetails);
  return (
    <Box sx={{display: 'flex'}}>
      <CardContent>
        <CardMedia
          component="img"
          sx={{ maxWidth: 320 }}
          image={movieDetails.poster}
          title={movieDetails.title}
        />
      </CardContent>

      <div>
        <CardContent>
          <Typography gutterBottom variant="h2" component="div">
            {movieDetails.title}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            {movieDetails.genres}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movieDetails.description}
          </Typography>
        </CardContent>
      </div>
      {/* <pre>{id}</pre>
      <pre>{JSON.stringify(movieDetails)}</pre> */}
    </Box>
  );
}
