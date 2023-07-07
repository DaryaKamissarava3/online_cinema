import {
  SET_USER,
  DELETE_USER,
  GET_USERS_LIST,
  GET_USERS_LIST_FAILURE,
  GET_USERS_LIST_SUCCESS,
  REQUEST_DELETE_ACCOUNT,
  REQUEST_DELETE_ACCOUNT_SUCCESS,
  REQUEST_DELETE_ACCOUNT_FAILURE,
} from './actionTypes';

export const setUser = (userData) => ({
  type: SET_USER,
  payload: userData,
});

export const deleteUser = () => ({
  type: DELETE_USER,
});

export const getUsersList = () => ({
  type: GET_USERS_LIST,
});

export const getUsersListSuccess = (data) => ({
  type: GET_USERS_LIST_SUCCESS,
  payload: data,
});

export const getUsersListFailure = (error) => ({
  type: GET_USERS_LIST_FAILURE,
  payload: error,
});

export const requestDeleteAccount = (payload) => ({
  type: REQUEST_DELETE_ACCOUNT,
  payload,
});

export const requestDeleteAccountSuccess = () => ({
  type: REQUEST_DELETE_ACCOUNT_SUCCESS,
});

export const requestDeleteAccountFailure = (error) => ({
  type: REQUEST_DELETE_ACCOUNT_FAILURE,
  payload: error,
});

