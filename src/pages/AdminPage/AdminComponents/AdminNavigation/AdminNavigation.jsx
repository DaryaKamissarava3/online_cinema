import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import image from './../../../../assets/images/nav.jpg';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.primary.main,
  },
}));

export const AdminNavigation = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box mt={6} mb={8}>
        <Typography variant='h4' className={classes.title}>Admin Page</Typography>
        <Grid container spacing={4} mt={4}>
          <Grid item lg={4}>
            <Link href={"/admin/add-films"} sx={{textDecoration: 'none'}}>
              <Card>
                <CardMedia
                  sx={{height:200}}
                  image={image}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    ADD MOVIE
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Create information about movie and add them to database
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item lg={4}>
            <Link href={"/admin/view-users"} sx={{textDecoration: 'none'}}>
              <Card>
                <CardMedia
                  sx={{height:200}}
                  image={image}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    USERS LIST
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Overview the list of users and options to delete them
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item lg={4}>
            <Link href={"/admin/films"} sx={{textDecoration: 'none'}}>
              <Card>
                <CardMedia
                  sx={{height:200}}
                  image={image}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    MOVIE LIST
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    See the list of movies and update them. Search for the movies and overview them all
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
