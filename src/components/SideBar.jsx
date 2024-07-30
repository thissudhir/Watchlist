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
  Drawer,
  useMediaQuery,
} from "@mui/material";
import {
  HomeOutlined,
  Logout,
  KeyboardArrowDown,
  Login,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const SideBar = () => {
  const { user, logoutUser } = useContext(GlobalContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const drawerContent = (
    <Box role="presentation">
      <Box margin={"20px"}>
        <Typography variant="h4" fontWeight={"bold"} color={"#ff1744"}>
          Watchlists
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          bgcolor: "#ff1744",
          color: "white",
          borderRadius: "8px",
          padding: "10px",
          margin: "20px 0",
        }}
      >
        <HomeOutlined />
        <Typography
          variant="h6"
          component={Link}
          to={"/"}
          sx={{ marginLeft: "10px", textDecoration: "none", color: "white" }}
          onClick={toggleDrawer}
        >
          Home
        </Typography>
      </Box>
      <Divider />
      <Box margin={"20px 0"}>
        <Typography
          variant="h5"
          component={Link}
          to={"/watchlist"}
          sx={{
            textDecoration: "none",
            color: "#333",
            "&:hover": { color: "#ff1744" },
          }}
          onClick={toggleDrawer}
        >
          My list
        </Typography>
      </Box>
      <Box
        position="absolute"
        bottom="2rem"
        sx={{
          background: "lightGrey",
          borderRadius: "5px",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          width: "calc(100% - 40px)",
        }}
      >
        <Avatar />
        <Box sx={{ ml: 2, flexGrow: 1 }}>
          <Typography fontWeight="bold" fontSize="0.9rem" color="text.primary">
            {user ? user : "Guest User"}
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
            <MenuItem
              component={Link}
              to={"/login"}
              sx={{ textDecoration: "none", color: "inherit" }}
              onClick={toggleDrawer}
            >
              <Login fontSize="small" sx={{ mr: 1 }} /> Login
            </MenuItem>
          ) : (
            <MenuItem
              onClick={() => {
                logoutUser();

                toggleDrawer();
              }}
            >
              <Logout fontSize="small" sx={{ mr: 1 }} /> Logout
            </MenuItem>
          )}
        </Menu>
      </Box>
    </Box>
  );

  return (
    <>
      {isSmallScreen ? (
        <>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>{" "}
          <Drawer open={drawerOpen} onClose={toggleDrawer}>
            <Box
              sx={{
                width: 250,
                padding: "20px",
                height: "100vh",
              }}
            >
              {drawerContent}
            </Box>
          </Drawer>
        </>
      ) : (
        <Box
          component="nav"
          padding={"20px"}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100%",
            backgroundColor: "#f5f5f5",
            width: "250px",
            boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
          }}
        >
          {drawerContent}
        </Box>
      )}
    </>
  );
};

export default SideBar;
