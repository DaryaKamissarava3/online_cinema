import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/SharedComponents/Button';
import { Input } from '../../components/SharedComponents/Input';

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
      <div className="register__container__inner">
        <h1 className="register__title">Registration page</h1>
        <Input
          type="text"
          placeholder="Enter first name"
          className="auth__input register"
          value={firstName}
          onChangeEvent={(e) => setFirstName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Enter last name"
          className="auth__input register"
          value={lastName}
          onChangeEvent={(e) => setLastName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Enter email"
          className="auth__input register"
          value={email}
          onChangeEvent={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Enter password"
          className="auth__input register"
          value={password}
          onChangeEvent={(e) => setPassword(e.target.value)}
        />
        <Button className="auth__btn register__btn" clickFunction={handleRegister} btnText="REGISTER"/>
      </div>
    </div>
  );
};
