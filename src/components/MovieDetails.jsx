import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Divider,
} from "@mui/material";

const MovieDetails = () => {
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
      .catch(() => {
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
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            margin: "20px",
            color: "lightgray",
            fontSize: { xs: "26px", sm: "32px", md: "48px" },
          }}
        >
          Loading...
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: "20px",
      }}
    >
      <Box
        sx={{
          flex: { xs: "0 1 auto", md: "0 1 40%" },
        }}
      >
        <CardMedia
          component="img"
          height="auto"
          image={movie.Poster}
          alt={movie.Title}
          sx={{ width: "100%", borderRadius: "8px" }}
        />
      </Box>
      <Box
        sx={{
          flex: { xs: "0 1 auto", md: "1 1 60%" },
        }}
      >
        <CardContent>
          <Typography variant="h3" gutterBottom>
            {movie.Title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {movie.Year}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2">
                <strong>Plot:</strong> {movie.Plot}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>Language:</strong> {movie.Language}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>Country:</strong> {movie.Country}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                <strong>Awards:</strong> {movie.Awards}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>Rated:</strong> {movie.Rated}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>Released:</strong> {movie.Released}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>Runtime:</strong> {movie.Runtime}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>Genre:</strong> {movie.Genre}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                <strong>Director:</strong> {movie.Director}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                <strong>Writer:</strong> {movie.Writer}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                <strong>Actors:</strong> {movie.Actors}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>Metascore:</strong> {movie.Metascore}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>IMDb Rating:</strong> {movie.imdbRating}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>IMDb Votes:</strong> {movie.imdbVotes}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>Type:</strong> {movie.Type}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                <strong>Box Office:</strong> {movie.BoxOffice}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Typography variant="body2">
                  <strong>Ratings:</strong>{" "}
                  {movie.Ratings.map((rating, index) => (
                    <div key={index}>
                      {rating.Source}: {rating.Value}
                    </div>
                  ))}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Box>
    </Box>
  );
};

export default MovieDetails;
