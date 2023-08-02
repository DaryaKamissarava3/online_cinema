import React, {useState} from 'react';

import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {loginUser} from '../../store/actions/authActions';

import { InputAdornment, InputLabel, Paper } from "@mui/material";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';

import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';

import logo from './../../assets/images/SITE_LOGO.svg';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding:theme.spacing(4),
    marginTop: theme.spacing(9),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  logo: {
    margin: '0 auto',
    width: '100px',
    height: '100px',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: '30px',
    margin: theme.spacing(4),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  inputWrapper: {
    marginTop: theme.spacing(6),
  },
  input: {
    paddingLeft: theme.spacing(3),
    borderRadius: '20px',
  },
  label: {
    color: theme.palette.primary.main,
  },
  inputAdornment: {
    height: '100%',
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(3),
    borderRadius: '15%',
  },
  gridContainer: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(6),
  },
}));

export const Login = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser({email, password}));
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Paper className={classes.paper} elevation={3}>
      <Box
        component="img"
        alt="Logo"
        src={logo}
        className={classes.logo}
      />
      <Typography component="h1" variant="h5" className={classes.title}>
        Login into your account
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit} noValidate>
        <Box className={classes.inputWrapper}>
          <InputLabel htmlFor="email" className={classes.label}>
            Email address
          </InputLabel>
          <TextField
            className={classes.input}
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            variant="standard"
            onChange={e => setEmail(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" className={classes.inputAdornment}>
                  <MarkEmailReadOutlinedIcon/>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box className={classes.inputWrapper}>
          <InputLabel htmlFor="password" className={classes.label}>
            Password
          </InputLabel>
          <TextField
            className={classes.input}
            variant="standard"
            required
            fullWidth
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" className={classes.inputAdornment}>
                  <VpnKeyOutlinedIcon/>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Grid container className={classes.gridContainer} spacing={2}>
          <Grid item xs={6}>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary"/>}
              label="Remember me"
            />
          </Grid>
          <Grid item xs={6} container justifyContent="flex-end" alignItems="center">
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mb:3 }}
        >
          LOGIN NOW
        </Button>
        <Link
          href="/registration"
        >
          SIGN UP NOW
        </Link>
      </form>
      </Paper>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};
