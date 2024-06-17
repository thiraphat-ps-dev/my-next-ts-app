import React from 'react';

import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import useStyles from './Navbar.style';

const Navbar: React.FC = () => {
  const { navbarStyles } = useStyles();
  const navStyle = navbarStyles({ padding: '4px' });

  return (
    <Box>
      <AppBar position="static" className="b" sx={navStyle}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" flex={1}>
            My Next.js App
          </Typography>

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="account"
          >
            <AccountCircle />
          </IconButton>
          <Typography variant="body1" component="div" sx={{ mx: 2 }}>
            Username
          </Typography>
          <Button color="inherit" startIcon={<LogoutIcon />}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
