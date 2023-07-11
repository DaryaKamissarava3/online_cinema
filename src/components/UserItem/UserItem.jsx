import React from 'react';
import { Button } from '@mui/material';

import { useDispatch } from 'react-redux';
import { deleteUser } from '../../store/actions/userActions';

import './UserItem.css';

export const UserItem = ({
  userId,
  firstName,
  lastName,
  email,
  requestDeleteAccount,
  }) => {
  const dispatch = useDispatch();

  const handleDeleteUser = () => {
    dispatch(deleteUser(userId));
  };

  return (
    <div className="user__item__block">
      <div className="user__firstName">
        First name :
        {firstName}
      </div>
      <div className="user__lastName">
        Last name :
        {lastName}
      </div>
      <div className="user__email">
        Email :
        {email}
      </div>
      {requestDeleteAccount && (
        <>
          <div className="user__delete__request">
            Request to delete account:
            {requestDeleteAccount ? 'Yes' : 'No'}
          </div>
          <Button onClick={handleDeleteUser}>DELETE USER</Button>
        </>
      )}

    </div>
  );
};
