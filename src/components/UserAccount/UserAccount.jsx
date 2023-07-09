import React from 'react';
import { Button } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { requestDeleteAccount } from '../../store/actions/userActions';

import './UserAccount.css';

export const UserAccount = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleRequestToDeleteAccount = () => {
    dispatch(requestDeleteAccount(user.id));
  };

  return (
    <div className="user__account__block">
      <h1>Account Information</h1>
      <div>
        <div>
          Name : {user.name}
        </div>
        <div>
          Email : {user.email}
        </div>
        <Button onClick={handleRequestToDeleteAccount}>REQUEST TO DELETE ACCOUNT</Button>
      </div>
    </div>
  );
};
