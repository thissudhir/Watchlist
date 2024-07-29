import React, { useContext } from "react";
import { Card, CardMedia, CardActions, Button } from "@mui/material";
import { BookmarkRemove } from "@mui/icons-material";
import { GlobalContext } from "../context/GlobalContext";

export const ResultCard = ({ movie, type }) => {
  const { removeMovieFromWatchlist } = useContext(GlobalContext);
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
          opacity: 0,
          transition: "opacity 0.3s",
        }}
        className="hover-button"
      >
        <Button
          size="small"
          sx={{
            // backgroundColor: "rgba(255, 0, 0, 0.7)",
            color: "red",
            "&:hover": {
              // backgroundColor: "rgba(255, 0, 0, 1)",
            },
          }}
          onClick={() => removeMovieFromWatchlist(movie.imdbID)}
        >
          <BookmarkRemove />
        </Button>
      </CardActions>
    </Card>
  );
};
