import {
  LOGIN_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  isRegistering: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        isRegistering: false,
        isLoggedIn: false,
        error: null,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isRegistering: true,
        isLoggedIn: false,
        error: null,
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        isLoggedIn: false,
        error: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: false,
        error: null,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isRegistering: true,
        isLoggedIn: true,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: true,
        error: null,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGOUT_USER_FAILURE:
      return {
        ...state,
        isLoggedIn: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
