import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  watchlist: localStorage.getItem("user")
    ? JSON.parse(
        localStorage.getItem(
          `${JSON.parse(localStorage.getItem("user"))}_watchlist`
        )
      )
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem(
        `${state.user}_watchlist`,
        JSON.stringify(state.watchlist)
      );
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem(`${state.user}_watchlist`);
    }
  }, [state.user, state.watchlist]);

  // actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchlist = (imdbID) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: imdbID });
  };
  const loginUser = (email) => {
    dispatch({ type: "LOGIN_USER", payload: email });
  };

  const logoutUser = () => {
    dispatch({ type: "LOGOUT_USER" });
  };

  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        watchlist: state.watchlist,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        loginUser,
        logoutUser,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
