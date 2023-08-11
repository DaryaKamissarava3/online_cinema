import React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UserMovieDetails from './UserMovieDetails';
import AdminMovieDetails from './AdminMovieDetails';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

export const FilmDetails = () => {
  const params = useParams();
  const classes = useStyles();

  const films = useSelector((state) => state.film.films);
  const userRole = useSelector((state) => state.user.user.role);

  const filmInformation = films.find((el) => {
    if (el.id === params.id) {
      return el;
    }
  });

  return (
    <Container>
      <Box mt={10} sx={{  boxShadow:'2px 2px 4px 4px rgba(0,0,255,0.4)',}}>
        <Paper className={classes.root}>
          {userRole === 'admin' && (
            <AdminMovieDetails
              params={params}
              filmInformation={filmInformation}
            />
          )}
          {userRole === 'user' && (
            <UserMovieDetails
              params={params}
              filmInformation={filmInformation}
            />
          )}
        </Paper>
      </Box>
    </Container>
  );
};
