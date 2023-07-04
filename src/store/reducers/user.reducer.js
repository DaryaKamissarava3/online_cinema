import {
  DELETE_USER,
  SET_USER,
} from '../actions/actionTypes';

const initialState = {
  name: null,
  email: null,
  role: null,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        name: action.payload.displayName,
        email: action.payload.email,
        role: action.payload.role,
      };
    case DELETE_USER:
      return {
        ...state,
        name: null,
        email: null,
        role: null,
      };
    default:
      return state
  }
}