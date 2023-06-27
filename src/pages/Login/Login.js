import React from 'react';
import {Button, Input} from '@mui/material';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {setAuthStatus, setUser} from '../../store/actions';
import {authStatuses} from '../../constants/authStatuses';

import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth, db} from '../../firebase.config';
import {doc, getDoc} from 'firebase/firestore';

import './Login.css';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          console.log(user);

          const userDocRef = doc(db, 'users', user.uid);
          const userDocSnapshot = await getDoc(userDocRef);
          let userRole = null;
          if (userDocSnapshot.exists()) {
            userRole = userDocSnapshot.data().role;
          }

          const userData = {
            id: user.uid,
            email: user.email,
            displayName: user.displayName,
            role: userRole,
          };
          dispatch(setUser(userData));
          dispatch(setAuthStatus(authStatuses.loggedIn));
          navigate('/');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.warn(errorCode);
          console.warn(errorMessage);
        });
    }
  }

  return (
    <div className="login__container">
      <form onSubmit={handleSubmit}>
        <h1 className="login__title">Login page</h1>
        <Input
          type="email"
          name="email"
          placeholder="Enter email"
          className="login__input"
          autoComplete="off"
        />
        <Input
          type="password"
          name="password"
          placeholder="Enter password"
          className="login__input"
        />
        <Button variant="outlined" className="login__btn" type="submit">Login</Button>
      </form>
    </div>
  );
};

