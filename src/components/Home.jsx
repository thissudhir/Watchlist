import { Box, Typography } from "@mui/material";
import React from "react";
import MovieCard from "./MovieCard";
import Search from "./Search";
import { BookmarkAdd } from "@mui/icons-material";

const Home = () => {
  return (
    <Box padding="40px" margin="0 auto">
      <Box
        sx={{
          border: "2px solid red",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "40px",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to{" "}
          <Typography
            variant="h3"
            component="span"
            sx={{ color: "red", fontWeight: "bold" }}
          >
            Watchlist
          </Typography>
        </Typography>
        <Typography variant="body1" paragraph>
          Browser movies, add them to Watchlists, and share them with friends.
        </Typography>
        <Typography variant="body1" paragraph>
          Just click <BookmarkAdd />
          to add the movie, the poster to see more details .
        </Typography>
      </Box>
      <Search />
    </Box>
  );
};

export default Home;
