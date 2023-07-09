import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getUsersList} from '../../store/actions/userActions';
import {UserItem} from '../UserItem';

import './ViewUsers.css';

export const ViewUsers = () => {
  const users = useSelector(state => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersList());
  }, [dispatch]);

  return (
    <div className="users__container">
      <h1 className="users__container__title">List of users</h1>
      {users.map((item) =>
        (
          <UserItem
            userId={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            email={item.email}
            requestDeleteAccount={item.requestDeleteAccount}
            key={item.id}
          />
        ))}
    </div>
  );
};
