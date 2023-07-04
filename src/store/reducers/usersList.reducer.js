import {
  GET_USERS_LIST,
  GET_USERS_LIST_FAILURE,
  GET_USERS_LIST_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  users: [],
  error: null,
}

export const usersListReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};