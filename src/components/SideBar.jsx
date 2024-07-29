import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Divider,
  Avatar,
  Tooltip,
  MenuItem,
  Menu,
} from "@mui/material";
import {
  HomeOutlined,
  Logout,
  KeyboardArrowDown,
  Login,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const SideBar = () => {
  const { user, logoutUser } = useContext(GlobalContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box component="nav" padding={"20px"} top="0" left="0">
      <Box margin={"20px"}>
        <Typography variant="h3" fontWeight={"bold"} color={"red"}>
          Watchlists
        </Typography>
      </Box>
      {/* <Search /> */}
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          bgcolor: "red",
          color: "white",
          borderRadius: "8px",
          padding: "10px",
          margin: "20px",
        }}
      >
        <HomeOutlined />{" "}
        <Typography variant="h5" className="link" component={Link} to={"/"}>
          Home
        </Typography>
      </Box>

      <Divider />
      <Typography
        className="link"
        variant="h6"
        component={Link}
        to={"/watchlist"}
      >
        My list
      </Typography>
      <Box
        position="absolute"
        bottom="2rem"
        sx={{
          background: "lightGrey",
          borderRadius: "5px",
          padding: "10px 8px",
          margin: "10px",
          alignItems: "center",
          display: "flex",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "lightgrey",

            "&:hover": {},
            transition: "box-shadow 0.3s ease-in-out",
          }}
        >
          <Avatar src="/path-to-user-image.jpg" />
          <Box sx={{ ml: 2, flexGrow: 1 }}>
            {/* <Typography
              fontWeight="bold"
              fontSize="0.9rem"
              color="text.primary"
            >
              Guest User
            </Typography> */}
            <Typography
              fontWeight="bold"
              fontSize="0.8rem"
              color="text.secondary"
            >
              {user ? `${user}` : ""}
            </Typography>
          </Box>
          <Tooltip title="Account settings">
            <IconButton onClick={handleClick} size="small">
              <KeyboardArrowDown />
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            onClick={handleClose}
          >
            {!user ? (
              <Link to={"/login"}>
                <MenuItem>
                  <Login fontSize="small" sx={{ mr: 1 }} /> Login
                </MenuItem>
              </Link>
            ) : (
              <Link to={"/login"}>
                <MenuItem>
                  <Logout
                    fontSize="small"
                    sx={{ mr: 1 }}
                    onClick={logoutUser}
                  />{" "}
                  Logout
                </MenuItem>
              </Link>
            )}
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};
export default SideBar;
