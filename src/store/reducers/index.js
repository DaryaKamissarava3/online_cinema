import {authReducer} from './auth.reducer';
import {userReducer} from './user.reducer';

export const rootReducer={
  auth:authReducer,
  user:userReducer,
}