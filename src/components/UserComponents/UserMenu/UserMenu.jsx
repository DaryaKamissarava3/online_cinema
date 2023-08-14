import React from 'react';

import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  breadcrumbs: {
    width: '50%',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(3),
    borderRadius: '20px',
  },
}));

export const UserMenu = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Breadcrumbs className={classes.breadcrumbs}>
        <Badge badgeContent={4} color="secondary" showZero max={10}>
          <Link underline="hover" href="/tickets" sx={{color: 'white'}} mr={1}>
            My tickets
          </Link>
        </Badge>
        <Link underline="hover" href="/account" sx={{color: 'white'}}>
          Account
        </Link>
        <Link underline="hover" href="/about" sx={{color: 'white'}}>
          About cinema
        </Link>
      </Breadcrumbs>
    </Box>
  );
};
