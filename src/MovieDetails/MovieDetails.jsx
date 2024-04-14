import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./MovieDetails";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ImageListItem from "@mui/material/ImageListItem";
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

  const imageContainerSX = {
    m: "12px 10px",
    width: 250,
    height: 350,
    boxShadow: "0 0 5px 0px #ffffff80",
  };

  const detailContainerSX = {
    display: "flex",
    alignItems: "center",
    width: "80%",
    margin: "auto",
  };

  return (
    <Box sx={detailContainerSX}>
      <CardContent>
        <Card sx={imageContainerSX}>
          <CardMedia
            component="img"
            sx={{ maxWidth: 320 }}
            image={movieDetails.poster}
            title={movieDetails.title}
          />
        </Card>
      </CardContent>

      <div>
        <CardContent>
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            sx={{ color: "white", mb: "13px" }}
          >
            {movieDetails.title}
          </Typography>
          <Box sx={{ m: "auto", width: "fit-content" }}>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{
                color: "white",
                mb: "15px",
                textAlign: "left",
                padding: "0 0 0 30px",
              }}
            >
              {movieDetails.genres}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white", textAlign: 'left' }}
            >
              {movieDetails.description}
            </Typography>
          </Box>
        </CardContent>
      </div>
      {/* <pre>{id}</pre>
      <pre>{JSON.stringify(movieDetails)}</pre> */}
    </Box>
  );
}
