import { Box } from "@mui/material";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Login from "./pages/Login";
import { GlobalProvider } from "./context/GlobalContext";
import Watchlist from "./components/Watchlist";
import MovieDetails from "./components/MovieDetails";

const Layout = () => {
  return (
    <Box display="flex">
      <Box>
        <SideBar />
      </Box>
      <Box sx={{ flexGrow: 1, marginLeft: { xs: "0", sm: "0", md: "250px" } }}>
        <Outlet />
      </Box>
    </Box>
  );
};

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="watchlist" element={<Watchlist />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
