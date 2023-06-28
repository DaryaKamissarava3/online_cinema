import {INITIAL_STATE} from '../../constants/initialState';
import {USERS} from '../../constants/actionTypes';

export const usersReducer = (state = INITIAL_STATE.users, action) => {
  switch (action.type) {
    case USERS.get:
      return {...action.payload};
    default:
      return state;
  }
};