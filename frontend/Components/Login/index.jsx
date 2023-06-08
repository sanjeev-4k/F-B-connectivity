import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate= useNavigate()

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8800/user/login", {
        email,
        password,
      });
      if (response.status === 200) {
        console.log("Logged In Successfully!!");
        localStorage.setItem("email", email);
        navigate('/userDashboard')

      } else {
        setErrorMessage(response.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form>
      <Typography variant="h3" margin={'5'} padding={5} textAlign={'center'} color={"primary"}>Welcome to ABC Company</Typography>
        <Box
          maxWidth={400}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          margin={"auto"}
        >

          <Typography
            variant="h6"
            padding={3}
            textAlign={"center"}
            color={"primary"}
          >
            Log In
          </Typography>
          <TextField
            margin="normal"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && (
            <Typography variant="body1" color="error">
              {errorMessage}
            </Typography>
          )}
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: 3 }}
            onClick={handleLogin}
          >
            Log In
          </Button>
          <br />
          <Link to="/">
          <Button variant="contained" color="success" sx={{ borderRadius: 3 }}>
            Sign up?
          </Button>
          </Link>
        </Box>
      </form>
    </div>
  );
};

export default Login;

