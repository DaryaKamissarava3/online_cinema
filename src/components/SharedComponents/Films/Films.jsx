import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getFilmList} from '../../../store/actions/filmsActions';

import {FilmsItem} from '../FilmsItem';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import './Films.css';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: '1300px',
  },
  btnContainer: {
    marginTop: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export const Films = () => {
  const classes = useStyles();

  const [arrowMin] = useState(0);
  const [arrowMax, setArrowMax] = useState(4);
  const films = useSelector((state) => state.film.films);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilmList());
  }, [dispatch]);

  const arrowMore = () => {
    setArrowMax(arrowMax + 4);
  };

  return (
    <Container className={classes.container}>
      <Box mt={5} mb={5}>
        <Typography
          gutterBottom
          variant="h4"
          component="h4"
          align="left"
          mb={3}
          ml={18}
          sx={{color: '#2c387e'}}
        >
          Films
        </Typography>
        <Grid container spacing={5}>
          {films.slice(arrowMin, arrowMax).map((item) => (
            <Grid item xs={12} sm={8} md={5} lg={3} key={item.id}>
              <Link href={`/films/${item.id}`} key={item.id} sx={{textDecoration: 'none', color: 'black'}}>
                <FilmsItem
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  imgUrl={item.image}
                  startDate={item.startDate}
                  endDate={item.endDate}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
        {(arrowMax < films.length) && (
          <Box className={classes.btnContainer}>
            <Button
              variant="contained"
              onClick={arrowMore}
            >
              MORE MOVIES
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
};
