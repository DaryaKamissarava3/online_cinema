import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import mainImage from './../../../assets/images/newsMainImage.svg';
import newsItems from './../../../assets/arrays/news.json';

import { makeStyles } from '@mui/styles';
import { NewsItem } from './NewsItem';

const useStyles = makeStyles((theme) => ({
  descriptionContainer: {
    position: 'absolute',
    top: '50%',
    left: '3%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '320px',
    color: 'white',
    zIndex: '3'
  },
  img: {
    width: '100px',
    height: '100px',
  }
}));


export const NewsSection = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box mt={10}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Box sx={{position: 'relative', overflow: 'visible'}}>
              <img src={mainImage} alt="News image"/>
              <Box className={classes.descriptionContainer}>
                <Typography variant="h6">
                  New American films on the screen of Nizami Cinema Center
                </Typography>
                <Typography variant='body2' sx={{fontSize: '13px'}}>
                  US-produced "Independence Day: Revival" at Nizami Cinema Center. "Neighbours. 2 in wartime ”films have
                  been shown. "Independence Day: Revival" is based on a screenplay by Nicholas Wright and directed by
                  Roland Emmerich in the genres of science fiction, adventure and war. Slogan: “We had 20 years to
                  prepare.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={2}>
              <Grid item>
                {newsItems.map((item) => (
                  <NewsItem
                    key={item.id}
                    image={item.image}
                    date={item.date}
                    text={item.description}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
