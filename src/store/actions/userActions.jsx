import {
  SET_USER,
  CLEAR_USER,
  GET_USERS_LIST,
  GET_USERS_LIST_FAILURE,
  GET_USERS_LIST_SUCCESS,
  REQUEST_DELETE_ACCOUNT,
  REQUEST_DELETE_ACCOUNT_SUCCESS,
  REQUEST_DELETE_ACCOUNT_FAILURE,
  DELETE_USER_FAILURE,
  DELETE_USER_SUCCESS,
  DELETE_USER,
  UPDATE_USER,
  UPDATE_USER_FAILURE,
  UPDATE_USER_SUCCESS,
} from './actionTypes';

export const setUser = (userData) => ({
  type: SET_USER,
  payload: userData,
});

export const clearUser = () => ({
  type: CLEAR_USER,
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

export const deleteUser = (payload) => ({
  type: DELETE_USER,
  payload,
});

export const deleteUserSuccess = () => ({
  type: DELETE_USER_SUCCESS,
});

export const deleteUserFailure = (error) => ({
  type: DELETE_USER_FAILURE,
  payload: error,
});

export const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload,
});

export const updateUserSuccess = () => ({
  type: UPDATE_USER_SUCCESS,
});

export const updateUserFailure = (error) => ({
  type: UPDATE_USER_FAILURE,
  payload: error,
});
