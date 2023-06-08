import React from 'react'
import { Box, Button,  Typography, Grid, CardContent, Card, IconButton } from "@mui/material";
import { Link } from 'react-router-dom';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import MenuIcon from '@mui/icons-material/Menu';

import ShuffleIcon from '@mui/icons-material/Shuffle';

function UserDashboard() {
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
          <Link to={'/userDashboard'}>
           Home
           </Link>
          </Typography>
          <Button color="inherit"><Link to={'/login'}> <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Login</Typography></Link></Button>
          <Button color="inherit"><Link to={'/'}> <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Logout</Typography></Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Grid container spacing={2}>

<Grid item xs={6}>

 <Link to={'/randomUser'}>

        <Card>

            <CardContent>

                <ShuffleIcon/>

                <Typography variant='h6' component="div">

                    Random Users

                </Typography>

               

                <Typography variant='body2' color="text.secondary">

                    Click here to go to Random User API

                </Typography>

            </CardContent>

        </Card>

        </Link>
      

</Grid>  

<Grid item xs={6}>
<Link to={'/currencyConverter'}>

    <Card>

        <CardContent>

            <CurrencyExchangeIcon/>

            <Typography variant='h6' component="div">

                Currency Converter

            </Typography>

            <Typography variant='body2' color="text.secondary">

            Click here to go to Currency Converter API

            </Typography>

        </CardContent>

    </Card>
    </Link>

</Grid>

</Grid>


</>
  )
}

export default UserDashboard;
