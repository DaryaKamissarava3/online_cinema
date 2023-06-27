import {INITIAL_STATE} from '../../constants/initialState';
import {USER} from '../../constants/actionTypes';

export const userReducer = (state = INITIAL_STATE.user, action) => {
  switch (action.type) {
    case USER.set:
      return {...action.payload};
    case USER.delete:
      return INITIAL_STATE.user;
    default:
      return state;
  }
};