import { Box, Typography } from "@mui/material";
import React from "react";
import Search from "./Search";
import { BookmarkAdd, BookmarkRemove } from "@mui/icons-material";

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
        <Typography
          variant="h3"
          sx={{ fontSize: { xs: "26px", sm: "32px", md: "48px" } }}
          gutterBottom
        >
          Welcome to{" "}
          <Typography
            variant="h3"
            component="span"
            sx={{
              color: "red",
              fontWeight: "bold",
              fontSize: { xs: "26px", sm: "32px", md: "48px" },
            }}
          >
            Watchlist
          </Typography>
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "18px", sm: "26px", md: "32px" } }}
          paragraph
        >
          Browser movies, add them to Watchlists, and share them with friends.
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "18px", sm: "26px", md: "32px" } }}
          paragraph
        >
          Just click <BookmarkAdd sx={{ color: "red" }} /> to add the movie, the
          poster to see more details and click{" "}
          <BookmarkRemove sx={{ color: "red" }} /> to mark the movie as watched.
        </Typography>
      </Box>
      <Search />
    </Box>
  );
};

export default Home;
