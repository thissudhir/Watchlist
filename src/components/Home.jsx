import { Box, Typography } from "@mui/material";
import React from "react";
import MovieCard from "./MovieCard";
import Search from "./Search";

const Home = () => {
  return (
    <Box flex={1} padding={"40px"} margin={"40px"}>
      <Box
        sx={{ border: " 2px solid red", padding: "20px", borderRadius: "8px" }}
      >
        <Typography variant="h3" marginBottom={"20px"}>
          Welcome to{" "}
          <Typography
            variant="h3"
            component="span"
            sx={{ color: "red", fontWeight: "bold" }}
          >
            Watchlist
          </Typography>
        </Typography>
        <Typography>
          {" "}
          Browser movies, add them to Watchlists and share it with friends.
        </Typography>
        <Typography>
          {" "}
          Just click the to add the movie, the poster to see more detail click
          to the mark the movie as watched.
        </Typography>
      </Box>
      <Search />
      {/* <MovieCard /> */}
    </Box>
  );
};

export default Home;
