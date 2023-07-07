import {
  DELETE_USER,
  GET_USERS_LIST,
  GET_USERS_LIST_FAILURE,
  GET_USERS_LIST_SUCCESS,
  REQUEST_DELETE_ACCOUNT,
  REQUEST_DELETE_ACCOUNT_FAILURE,
  REQUEST_DELETE_ACCOUNT_SUCCESS,
  SET_USER,
} from '../actions/actionTypes';

const initialState = {
  user: {
    id: null,
    name: null,
    email: null,
    role: null,
    requestDeleteAccount: false,
  },
  users: [],
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: {
          id: action.payload.id,
          name: action.payload.displayName,
          email: action.payload.email,
          role: action.payload.role,
        }
      };
    case DELETE_USER:
      return {
        ...state,
        user: {
          name: null,
          email: null,
          role: null,
        }
      };
    case GET_USERS_LIST:
      return {
        ...state,
        users: [],
        error: null,
      };
    case GET_USERS_LIST_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: null,
      };
    case GET_USERS_LIST_FAILURE:
      return {
        ...state,
        users: [],
        error: action.payload,
      };
    case REQUEST_DELETE_ACCOUNT:
      return {
        ...state,
        user: {
          ...state.user,
          requestDeleteAccount: false,
        },
        error: null,
      };
    case REQUEST_DELETE_ACCOUNT_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          requestDeleteAccount: true,
        },
        error: null,
      };
    case REQUEST_DELETE_ACCOUNT_FAILURE:
      return {
        ...state,
        user: {
          ...state.user,
          requestDeleteAccount: false,
        },
        error: action.payload,
      };
    default:
      return state
  }
}