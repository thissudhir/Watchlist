import React, { useContext } from "react";
import {
  Card,
  CardMedia,
  CardActions,
  Button,
  useMediaQuery,
} from "@mui/material";
import { BookmarkRemove } from "@mui/icons-material";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
export const ResultCard = ({ movie }) => {
  const { removeMovieFromWatchlist } = useContext(GlobalContext);
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const handleCardClick = () => {
    navigate(`/movie/${movie.imdbID}`);
  };
  const handleButtonClick = (event) => {
    event.stopPropagation();
    removeMovieFromWatchlist(movie.imdbID);
  };
  return (
    <Card
      sx={{
        width: 345,
        margin: "16px",
        position: "relative",
        "&:hover .hover-button": {
          opacity: isSmallScreen ? 0 : 1,
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
          onClick={handleButtonClick}
        >
          <BookmarkRemove />
        </Button>
      </CardActions>
    </Card>
  );
};
