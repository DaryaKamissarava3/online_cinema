import {authReducer} from './auth.reducer';
import {userReducer} from './user.reducer';
import {filmReducer} from './film.reducer';
import {usersListReducer} from './usersList.reducer';

export const rootReducer = {
  auth: authReducer,
  user: userReducer,
  film: filmReducer,
  users: usersListReducer,
};