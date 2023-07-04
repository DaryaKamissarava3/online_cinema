import {
  LOGIN_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS
} from './actionTypes';

export const registerUser = (userData) => ({
  type: REGISTER_USER,
  payload: userData,
});

export const registerUserSuccess = () => ({
  type: REGISTER_USER_SUCCESS,
});

export const registerUserFailure = (error) => ({
  type: REGISTER_USER_FAILURE,
  payload: error,
});

export const loginUser = (userData) => ({
  type: LOGIN_USER,
  payload: userData,
});

export const loginUserSuccess = () => ({
  type: LOGIN_USER_SUCCESS,
});

export const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const logoutUserSuccess = () => ({
  type: LOGOUT_USER_SUCCESS,
});

export const logoutUserFailure = (error) => ({
  type: LOGOUT_USER_FAILURE,
  payload:error,
});

