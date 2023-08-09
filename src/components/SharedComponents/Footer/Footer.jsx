import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  footerIcons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyright: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
}));

const footerTitles = ['PROFILE', 'RECENT POSTS', 'CUSTOMER'];
const footerProfile = ['FAQs', 'Pricing plans', 'Order tracking', 'Returns'];
const footerRecentPosts = ['Touch of uniqueness', 'Offices you won’t forget', 'Cicilan'];
const footerCustomer = ['Help & contact us', 'Return', 'Online stores', 'Terms & cordition'];

export const Footer = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box ml={18} mt={12} mb={4}>
        <Grid container spacing={2} justifyContent="center">
          {footerTitles.map((title, index) => (
            <Grid item key={index} xs={12} sm={4}>
              <h4>{title}</h4>
              {index === 0 && footerProfile.map((item, subIndex) => <p key={subIndex}>{item}</p>)}
              {index === 1 && footerRecentPosts.map((item, subIndex) => <p key={subIndex}>{item}</p>)}
              {index === 2 && footerCustomer.map((item, subIndex) => <p key={subIndex}>{item}</p>)}
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className={classes.footerIcons}>
        <Link href='https://www.instagram.com/' mr={3}>
          <InstagramIcon/>
        </Link>
        <Link href='https://www.facebook.com/' mr={3}>
          <FacebookIcon/>
        </Link>
        <Link href='https://twitter.com/' mr={3}>
          <TwitterIcon/>
        </Link>
      </Box>
      <Box className={classes.copyright} mb={8}>
        &copy; 2023 Your Company Name. All rights reserved.
      </Box>
    </Container>
  );
};
