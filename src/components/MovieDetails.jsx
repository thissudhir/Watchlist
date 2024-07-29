import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, Card, CardMedia, CardContent } from "@mui/material";

const MovieDetails = ({}) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${
        import.meta.env.VITE_REACT_OMDB_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching the movie details.");
      });
  }, [id]);

  if (error) {
    return (
      <Box padding="20px">
        <Typography variant="h5">{error}</Typography>
      </Box>
    );
  }

  if (!movie) {
    return (
      <Box padding="20px">
        <Typography variant="h5">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box padding="20px">
      <Card>
        <CardMedia
          component="img"
          height="500"
          image={movie.Poster}
          alt={movie.Title}
        />
        <CardContent>
          <Typography variant="h4">{movie.Title}</Typography>
          <Typography variant="body1">{movie.Year}</Typography>
          <Typography variant="body2">{movie.Plot}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MovieDetails;
