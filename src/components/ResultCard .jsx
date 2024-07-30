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

export const ResultCard = ({ movie, type }) => {
  const { removeMovieFromWatchlist } = useContext(GlobalContext);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
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
          onClick={() => removeMovieFromWatchlist(movie.imdbID)}
        >
          <BookmarkRemove />
        </Button>
      </CardActions>
    </Card>
  );
};
