import React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Paper } from '@mui/material';

import { makeStyles, styled } from '@mui/styles';

const tags = ['action', 'autobiography', 'adventure',
  'animation', 'biography', 'comedy',
  'crime', 'documentary', 'drama',
  'fantasy', 'family', 'horror',
  'history', 'music', 'news', 'politics',
  'romance', 'series', 'sci-fi', 'talk',
  'tv movie', 'thriller', 'western', 'war'
];

const useStyles = makeStyles((theme) => ({
  innerContainer: {
    padding: theme.spacing(4),
    maxWidth: '1000px',
    margin: '0 auto',
    backgroundColor: theme.palette.primary.light,
  },
  tag: {
    border: '1px solid #ccc',
    borderRadius: theme.shape.borderRadius,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
}));

const Item = styled(Paper)(({theme}) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.primary.main,
}));

export const TagsSection = () => {
  const classes = useStyles();

  return (
    <Box mt={10}>
      <Box className={classes.innerContainer} sx={{borderRadius:3}}>
        <Grid container spacing={3}>
          {tags.map((tag) => (
            <Grid item xs={2} key={tag}>
              <Link href='/' sx={{textDecoration: 'none'}}>
                <Item className={classes.tag}>
                  {tag}
                </Item>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
