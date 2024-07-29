# Movie Watchlist App

## Description

This is a simple movie watchlist application that allows multiple users to search for movies, view details about them, and manage their personal watchlists. Users can create accounts, log in/out, search for movies, and add/remove movies from their watchlists.

## Features

- User Authentication (Email-based, no verification required)
- Movie Search
- Personal Watchlist Management
- Local Data Storage

## Requirements

- Node.js (v14 or later recommended)
- npm (v6 or later)

## Installation

1. Clone the repository: https://github.com/thissudhir/Watchlist
2. Navigate to the project directory: `cd watchlist`
3. Install dependencies: `npm install`
4. Create a `.env` file in the root directory and add your OMDB API key: `VITE_REACT_OMDB_API_KEY=your_api_key_here`
5. Start the development server:`npm run dev`

## Usage

1. Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).
2. Create an account or log in using an email address.
3. Use the search bar to find movies.
4. Click on a movie to view its details.
5. Add or remove movies from your watchlist.
6. View your personal watchlist.

## Technologies Used

- React.js
- Material-UI (for styling)
- Vite (for build tooling)
- OMDB API (for movie data)

## Project Structure

- `src/components/`: React components
- `src/context/`: Global Cnotext and related logic
- `src/App.js`: Main application component
- `src/main.jsx`: Entry point of the application

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Open Movie Database (OMDB) API](http://www.omdbapi.com/) for providing movie data.
- [Material-UI](https://mui.com/) for the UI components.
