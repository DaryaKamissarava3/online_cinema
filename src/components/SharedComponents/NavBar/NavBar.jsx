import React from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {logoutUser} from '../../../store/actions/authActions';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import MenuIcon from '@mui/icons-material/Menu';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

import logo from '../../../assets/images/SITE_LOGO.svg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  navbarDisplayFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    backgroundColor: '#ffffff',
    borderRadius: '50%',
  },
  btn: {
    backgroundColor: '#fefefe',
    color: '#fefefe',
  }
}));

export const NavBar = () => {
  const classes = useStyles();

  const loggedIn = useSelector((state) => state.auth.isLoggedIn === true);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <AppBar position="static" sx={{backgroundColor: 'transparent'}} className="container">
      <Box className={classes.navbarDisplayFlex}>
        {loggedIn &&
          <>
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{marginInlineStart: 6}}
            >
              <MenuIcon/>
            </IconButton>
          </>
        }
        <Box className={classes.navBlock} >
          {loggedIn &&
            <>
              <Link href="#" underline="none" sx={{margin: '10px'}}>
                ABOUT
              </Link>
              <Link href="#" underline="none" sx={{margin: '10px'}}>
                MOVIES
              </Link>
            </>
          }
          <Link href="/">
            <IconButton edge="start" color="inherit" aria-label="logo" sx={{margin: '10px'}}>
              <Box
                component="img"
                alt="Logo"
                src={logo}
                className={classes.logo}
              />
            </IconButton>
          </Link>
          {loggedIn &&
            <>
              <Link href="#" underline="none" sx={{margin: '10px'}}>
                SERIES
              </Link>
              <Link href="#" underline="none" sx={{margin: '10px'}}>
                UPCOMING
              </Link>
            </>
          }
        </Box>
        <Box>
          {loggedIn &&
            <Button
              sx={{marginInlineEnd: 6}}
              className={classes.btn}
              variant="outlined"
              endIcon={<LogoutOutlinedIcon/>}
              onClick={handleLogout}
            >
              LOG OUT
            </Button>
          }
          {!loggedIn &&
            <>
              <Button
                sx={{marginInlineEnd: 6}}
                className={classes.btn}
                variant="outlined"
                endIcon={<LoginOutlinedIcon/>}
                href="/login"
              >
                LOGIN
              </Button>
              <Button
                sx={{marginInlineEnd: 6}}
                className={classes.btn}
                variant="outlined"
                endIcon={<HowToRegOutlinedIcon/>}
                href="/registration"
              >
                REGISTRATION
              </Button>
            </>
          }
        </Box>
      </Box>
    </AppBar>
  );
};
