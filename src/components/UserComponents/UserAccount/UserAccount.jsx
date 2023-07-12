import React, { useState } from 'react';
import { Button, TextField} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { requestDeleteAccount, updateUser } from '../../../store/actions/userActions';

import './UserAccount.css';

export const UserAccount = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

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
    <div className="user__account__block">
      <h1>Account Information</h1>
      <div>
        <div>
          First name :
          <br/>
          <TextField
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          Last name :
          <br/>
          <TextField
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          Email :
          {user.email}
        </div>
        <Button onClick={handleUpdateUser}>Update profile</Button>
        <br/>
        <Button onClick={handleRequestToDeleteAccount}>REQUEST TO DELETE ACCOUNT</Button>
      </div>
    </div>
  );
};
