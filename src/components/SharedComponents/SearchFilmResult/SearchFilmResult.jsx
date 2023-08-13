import React, { useState } from 'react';
import { FilmsItem } from '../FilmsItem';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  moviesList: {
    margin: theme.spacing(6),
  },
  hide: {
    display: 'none',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.primary.main,
  },
  btnContainer: {
    marginTop: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

export const SearchFilmResult = ({isActiveBlock, foundResultsOfSearch}) => {
  const classes = useStyles();

  const [arrowMin] = useState(0);
  const [arrowMax, setArrowMax] = useState(4);

  const arrowMore = () => {
    setArrowMax(arrowMax + 8);
  };

  return (
    <Box className={isActiveBlock ? classes.moviesList : classes.hide} mb={10}>
      <div className="container">
        <Box mb={5}>
          <Typography variant='h4' className={classes.title}>Search results</Typography>
        </Box>
        <Grid container spacing={5} ml={1}>
          {foundResultsOfSearch.slice(arrowMin, arrowMax).map((item) => (
            <Grid item xs={12} sm={8} md={5} lg={3} key={item.id}>
              <Link href={`/films/${item.id}`} key={item.id} sx={{textDecoration: 'none', color: 'black'}}>
                <FilmsItem
                  title={item.title}
                  price={item.price}
                  imgUrl={item.image}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  key={item.id}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
        {!(arrowMax >= foundResultsOfSearch.length || foundResultsOfSearch.length < 4) && (
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
    </Box>
  );
};
