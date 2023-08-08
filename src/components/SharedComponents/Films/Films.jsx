import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFilmList } from '../../../store/actions/filmsActions';

import { FilmsItem } from '../FilmsItem';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import './Films.css';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: '1500px',
  },
  btnContainer: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
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
      <Typography
        gutterBottom
        variant="h4"
        component="h4"
        align="left"
        mb={3}
        ml={10}
      >
        Films
      </Typography>
      <div className="container">
        <Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            position: 'relative',
            justifyContent: 'center'
          }}>
            {films.slice(arrowMin, arrowMax).map((item) => (
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
            ))}
          </Box>
        </Box>
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
      </div>
    </Container>
  );
};
