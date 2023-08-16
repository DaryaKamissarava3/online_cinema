import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../store/actions/authActions';

import { Progress } from '../../components/SharedComponents/Feedback/Progress';
import { InformationAlert } from '../../components/SharedComponents/Feedback/InformationAlert';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import logo from '../../assets/images/SITE_LOGO.svg';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  logo: {
    margin: '0 auto',
    width: '70px',
    height: '70px',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: '12px',
    margin: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  inputWrapper: {
    marginTop: theme.spacing(1),
  },
  input: {
    paddingLeft: theme.spacing(3),
    borderRadius: '20px',
  },
  label: {
    color: theme.palette.primary.main,
  },
  inputAdornment: {
    height: '80%',
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(2),
    borderRadius: '15%',
  },
  button: {
    backgroundColor: "#00b8d4"
  },
}));

export const Registration = () => {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const successRegistration = useSelector((state) => state.auth.isRegistering === true);
  const errorRegistration = useSelector((state) => state.auth.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (errorRegistration || successRegistration) {
      setIsSubmitting(false);
    }
  }, [errorRegistration, successRegistration]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
      firstName,
      lastName,
    };

    setIsSubmitting(true);
    dispatch(registerUser(userData));
  };

  return (
    <Container maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Box
          component="img"
          alt="Logo"
          src={logo}
          className={classes.logo}
        />
        <Typography component="h1" variant="h5" className={classes.title}>
          Register
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Box className={classes.inputWrapper}>
            <InputLabel htmlFor="firstName" className={classes.label}>
              First name
            </InputLabel>
            <TextField
              className={classes.input}
              required
              fullWidth
              id="firstName"
              name="firstName"
              autoFocus
              variant="standard"
              onChange={e => setFirstName(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" className={classes.inputAdornment}>
                    <AccountCircleOutlinedIcon/>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box className={classes.inputWrapper}>
            <InputLabel htmlFor="lastName" className={classes.label}>
              First name
            </InputLabel>
            <TextField
              className={classes.input}
              required
              fullWidth
              id="lastName"
              name="lastName"
              autoFocus
              variant="standard"
              onChange={e => setLastName(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" className={classes.inputAdornment}>
                    <AccountCircleOutlinedIcon/>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
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
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{mt: 2, mb: 2}}
            disabled={isSubmitting}
          >
            {isSubmitting ? <Progress/> : 'CREATE ACCOUNT'}
          </Button>
          <Link
            href="/login"
            sx={{fontSize: '12px'}}
          >
            LOGIN NOW
          </Link>
        </form>
      </Paper>
      {errorRegistration &&
        <InformationAlert
          severity="error"
          alertTitle="Error"
          alertText={errorRegistration.code}
        />
      }
      {successRegistration &&
        <InformationAlert
          severity="success"
          alertTitle="Success"
          alertText="Registration was successful!"
        />
      }
    </Container>
  );
};
