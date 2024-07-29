import { Box, InputBase } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MovieCard from "./MovieCard";

const Search = () => {
  const [query, setquery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();

    setquery(e.target.value);

    fetch(
      `http://www.omdbapi.com/?apikey=${
        import.meta.env.VITE_REACT_OMDB_API_KEY
      }&s=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          // console.log("The data is ", data);
          setSearchResults(data.Search || []);
          console.log("The Search data is ", searchResults);
        } else {
          setSearchResults([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setSearchResults([]);
      });
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #ced4da",
          borderRadius: "8px",
          padding: "10px 10px",
          margin: "8px",
          width: "100%",
        }}
      >
        <SearchIcon />

        <InputBase
          sx={{ marginLeft: "8px", flex: 1 }}
          placeholder="Search..."
          inputProps={{ "aria-label": "search" }}
          fullWidth
          value={query}
          onChange={handleChange}
        />
      </Box>
      {searchResults.length > 0 && (
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {searchResults.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Search;
