import {INITIAL_STATE} from '../../constants/initialState';
import { USER} from '../../constants/actionTypes';

export const userReducer=(state=INITIAL_STATE.user,action)=>{
  switch (action.type) {
    case USER.set:
      return {...action.payload};
    default:
      return state;
  }
};