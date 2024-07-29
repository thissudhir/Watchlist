export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.imdbID !== action.payload
        ),
      };
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload,
        watchlist:
          JSON.parse(localStorage.getItem(action.payload + "_watchlist")) || [],
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: null,
        watchlist: [],
      };

    default:
      return state;
  }
};
