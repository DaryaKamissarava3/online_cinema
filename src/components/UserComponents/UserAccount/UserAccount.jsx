import React, {useState} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { requestDeleteAccount, updateUser } from '../../../store/actions/userActions';

import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import {useTheme} from '@mui/styles';

export const UserAccount = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const theme = useTheme();

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const handleRequestToDeleteAccount = () => {
    dispatch(requestDeleteAccount(user.id));
  };

  const handleUpdateUser = () => {
    const updatedUser = {
      userId: user.id,
      firstName: firstName,
      lastName: lastName,
    };

    dispatch(updateUser(updatedUser));
  }

  return (
    <Container>
      <Box mt={8}>
        <Typography variant='h4' sx={{display: 'flex', justifyContent: 'center'}}>Account Information</Typography>
        <Grid container justifyContent="center" mt={4}>
          <Card sx={{boxShadow: '2px 3px 5px 3px rgba(0, 0, 255, 0.4)'}}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',gap: theme.spacing(2),padding:theme.spacing(5) }}>
              <TextField
                label='FIRST NAME'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                label='LAST NAME'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <Typography>Email :{user.email}</Typography>
              <Button
                variant='contained'
                onClick={handleUpdateUser}
              >
                Update profile
              </Button>
              <Button
                variant='contained'
                onClick={handleRequestToDeleteAccount}
              >
                REQUEST TO DELETE ACCOUNT
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Box>
    </Container>
  );
};
