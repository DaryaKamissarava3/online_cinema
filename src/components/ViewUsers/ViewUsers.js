import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import {collection, getDocs,query,where} from 'firebase/firestore';
import {db} from '../../firebase.config';

import {setUsersList} from '../../store/actions';


export const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("role", "==", "user"));
      const querySnapshot = await getDocs(q);
      const userList = [];
      querySnapshot.forEach((doc) => {
        userList.push({id: doc.id, ...doc.data()});
      });
      console.log(userList);
      setUsers(userList);
      dispatch(setUsersList(userList))
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

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
