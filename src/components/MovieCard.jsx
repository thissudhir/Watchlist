import React, { useContext } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { GlobalContext } from "../context/GlobalContext";
import { Bookmark, BookmarkAdd } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);
  let storedMovie = watchlist.find((o) => o.imdbID === movie.imdbID);
  const addButtonDisabled = storedMovie ? true : false;

  const handleCardClick = () => {
    navigate(`/movie/${movie.imdbID}`);
  };
  const handleButtonClick = (event) => {
    event.stopPropagation();
    addMovieToWatchlist(movie);
  };
  return (
    <Card
      sx={{
        width: 345,
        margin: "16px",
        position: "relative",
        "&:hover .hover-button": {
          opacity: 1,
        },
      }}
      onClick={handleCardClick}
    >
      <CardMedia
        component="img"
        height="auto"
        image={movie.Poster}
        alt={movie.Title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.Year}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          position: "absolute",
          top: -12,
          left: -25,
          opacity: 0,
          transition: "opacity 0.3s",
        }}
        className="hover-button"
      >
        <Button
          size="small"
          sx={{
            color: "red",
          }}
          disabled={addButtonDisabled}
          onClick={handleButtonClick}
        >
          <BookmarkAdd />
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
