import React, { useContext } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  useMediaQuery,
} from "@mui/material";
import { GlobalContext } from "../context/GlobalContext";
import { BookmarkAdd } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);
  let storedMovie = watchlist.find((o) => o.imdbID === movie.imdbID);
  const addButtonDisabled = storedMovie ? true : false;
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
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
        width: { xs: "100%", sm: 345 },
        margin: { xs: "8px 0", sm: "16px" },
        position: "relative",
        "&:hover .hover-button": {
          opacity: isSmallScreen ? 0 : 1,
        },
        cursor: "pointer",
      }}
      onClick={handleCardClick}
    >
      <CardMedia
        component="img"
        height="auto"
        image={movie.Poster}
        alt={movie.Title}
        sx={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px" }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem" },
          }}
        >
          {movie.Title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: { xs: "0.875rem", sm: "1rem" },
          }}
        >
          {movie.Year}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          position: "absolute",
          top: -12,
          left: -25,
          opacity: isSmallScreen ? 1 : 0,
          transition: "opacity 0.3s",
        }}
        className="hover-button"
      >
        <Button
          size="large"
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
