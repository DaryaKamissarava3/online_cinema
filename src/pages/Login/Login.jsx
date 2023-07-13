import React from 'react';

import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {loginUser} from '../../store/actions/authActions';

import './Login.css';
import {Button} from "../../components/SharedComponents/Button";
import {Input} from "../../components/SharedComponents/Input";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email && password) {
      dispatch(loginUser({email, password}));
      navigate('/');
    }
  };

  return (
    <div className="login__container">
      <div className="login__container__inner">
        <h1 className="login__title">Login page</h1>
        <form onSubmit={handleSubmit} className="login__form">
          <Input
            type="email"
            name="email"
            placeholder="Enter email"
            className="auth__input login"
            inpAutoComplete="off"
          />
          <Input
            type="password"
            name="password"
            placeholder="Enter password"
            className="auth__input login"
          />
          <Button
            className="auth__btn login__btn"
            btnType="submit"
            btnText="LOGIN"
          />
        </form>
      </div>
    </div>
  );
};
