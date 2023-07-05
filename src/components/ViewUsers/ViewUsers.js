import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getUsersList} from '../../store/actions/userActions';

export const ViewUsers = () => {
  const users = useSelector(state => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersList());
  }, [dispatch]);

  return (
    <div>
      <h1>List of users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            ID: {user.id}<br/>
            First Name: {user.firstName}<br/>
            Last Name: {user.lastName}<br/>
            Email: {user.email}<br/>
            Role: {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};
