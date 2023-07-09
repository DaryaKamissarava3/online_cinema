import React, { useState } from 'react';
import { Button, Input } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/actions/authActions';

import './Registration.css';

export const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    const userData = {
      email,
      password,
      firstName,
      lastName,
    };

    dispatch(registerUser(userData));
    navigate('/login');
  };

  return (
    <div className="register__container">
      <h1 className="register__title">Registration page</h1>
      <Input
        type="text"
        placeholder="Enter first name"
        className="register__input"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Enter last name"
        className="register__input"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Enter email"
        className="register__input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Enter password"
        className="register__input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        onClick={handleRegister}
        variant="outlined"
        className="register__btn"
      >
        Register
      </Button>
    </div>
  );
};
