import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Box, Typography } from "@mui/material";
import { ResultCard } from "./ResultCard ";

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{ margin: "20px", textAlign: "center", color: "red" }}
      >
        Your Watchlist
      </Typography>
      {watchlist.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {watchlist.map((movie) => (
            <ResultCard key={movie.imdbID} movie={movie} type={"watchlist"} />
          ))}
        </Box>
      ) : (
        <Typography
          variant="h1"
          sx={{ textAlign: "center", margin: "20px", color: "lightgray" }}
        >
          Your watchlist is empty. Add now!
        </Typography>
      )}
    </Box>
  );
};

export default Watchlist;
