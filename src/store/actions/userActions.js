import {
  SET_USER,
  DELETE_USER,
  GET_USERS_LIST,
  GET_USERS_LIST_FAILURE,
  GET_USERS_LIST_SUCCESS,
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
  payload:data,
});

export const getUsersListFailure = (error) => ({
  type: GET_USERS_LIST_FAILURE,
  payload: error,
});

