import React from "react";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import {} from "@mui/material";

import {
  TextField,
  Box,
  Button,
  Typography,
  Grid,
  CardContent,
  Card,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import MenuIcon from "@mui/icons-material/Menu";

import ShuffleIcon from "@mui/icons-material/Shuffle";
function RandomUser() {
  const [userno, SetUserNo] = useState({
    userno: null,
  });

  const [data, SetData] = useState([]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    SetUserNo(e.target.value);
  };

  console.log("kjh ", userno);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://randomuser.me/api/?results=${+userno}`
      );

      const users = response.data.results;

      SetData(users);

      navigate("./");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to={"/userDashboard"}>Home</Link>
            </Typography>
            <Button color="inherit">
              <Link to={"/login"}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Login
                </Typography>
              </Link>
            </Button>
            <Button color="inherit">
              <Link to={"/"}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Logout
                </Typography>
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <br></br>

      <Grid container spacing={2}>
        <Grid item xs={10}>
          <TextField
          type="number"
            fullWidth
            label="Enter the number of users you want to fetch!!"
            id="fullWidth"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={10} marginTop={"25px"}>
          <Button variant="contained" onClick={handleClick}>
            Fetch Users
          </Button>
        </Grid>
      </Grid>
      <br></br>
      <div style={{display:'flex', flexWrap: 'wrap'}}>
      {data.map((user, index) => (
        <Card key={index} sx={{ maxWidth: 800, marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6" component="div">
              <img src={user.picture.large} />
            </Typography>

            <Typography variant="h6" component="div">
             Name: {`${user.name.first} ${user.name.last}`}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Email: {user.email}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Phone: {user.phone}
            </Typography>
          </CardContent>
        </Card>
      ))}
      </div>
    </>
  );
}
export default RandomUser;
