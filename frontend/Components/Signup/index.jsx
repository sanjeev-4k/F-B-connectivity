import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
const Signup = () => {
    const [user,setuser] = useState({
        name:"",
        mobileNumber:"",
        email:"",
        password:"",
      });
      const navigate= useNavigate()
      const handleChange = (e) =>{
        setuser(prev =>({...prev, [e.target.name] : e.target.value }))
      };
      console.log(user)
      const handleClick = async e =>{
        e.preventDefault()
        try{
           
          await axios.post("http://localhost:8800/user",user)
          navigate('/login')
          alert('Signed Up Successfully..')
        }catch(err){
          console.log(err)
        }
      }

    return (
        <>
            <form>
                <Typography variant="h3" margin={'5'} padding={5} textAlign={'center'} color={"primary"}>Welcome to ABC Company</Typography>
                <Box maxWidth={400} display={'flex'} flexDirection={'column'} alignItems={"center"} margin={'auto'} >
                <Typography
            variant="h6"
            padding={3}
            textAlign={"center"}
            color={"primary"}
          >
            Sign Up
          </Typography>
                    <TextField
                        margin="normal"
                        
                        type="text"
                        placeholder="Enter name"
                        id="name"
                        name="name"
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        
                        type="number"
                        placeholder="Enter phone"
                        id="no"
                        name="mobileNumber"
                        onChange={handleChange} />
                    <TextField
                        margin="normal"
                        type="email"
                        placeholder="Enter email"
                        id="email"
                        name="email"
                        onChange={handleChange} />
                    <TextField margin="normal" type="password" placeholder="Password" id="pass" name="password"
                        onChange={handleChange} />
                    <Button variant="contained" color="success" sx={{ borderRadius: 4 }} onClick={handleClick}>Sign In</Button><br></br>
                    <Link to="/login">
                        <Button variant="contained" color="success" sx={{ borderRadius: 4 }} >Already a User? Login</Button>
                    </Link>
                </Box>
            </form>
        </>
    )
}
export default Signup;
