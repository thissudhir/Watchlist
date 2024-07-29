import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Box, Typography } from "@mui/material";
import { ResultCard } from "./ResultCard ";

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <Box>
      <Typography variant="h2">Your Watchlist</Typography>
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
        <Typography variant="h5">Your watchlist is empty, Add now</Typography>
      )}
    </Box>
  );
};

<Box></Box>;
export default Watchlist;
