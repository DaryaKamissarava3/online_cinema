import {authReducer} from './auth.reducer';
import {userReducer} from './user.reducer';
import {usersReducer} from './users.reducer';

export const rootReducer={
  auth:authReducer,
  user:userReducer,
  users:usersReducer,
};