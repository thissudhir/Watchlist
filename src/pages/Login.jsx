import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { loginUser } = useContext(GlobalContext);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLogin = () => {
    if (email) {
      loginUser(email);
      alert(`Logged in as ${email}`);
      navigate("/");
    } else {
      alert("Please enter an email address.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "400px",
          width: "100%",
          padding: "20px",
          border: "1px solid #ced4da",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4" color="red" gutterBottom>
          Login
        </Typography>
        <TextField
          fullWidth
          label="Email Address"
          variant="outlined"
          value={email}
          onChange={handleInputChange}
          sx={{ marginBottom: "20px" }}
        />
        <Button
          variant="contained"
          sx={{
            color: "white",
            bgcolor: "red ",
            "&:hover": {
              bgcolor: "darkred",
            },
          }}
          fullWidth
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
