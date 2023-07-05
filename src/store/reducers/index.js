import {authReducer} from './auth.reducer';
import {userReducer} from './user.reducer';
import {filmReducer} from './film.reducer';

export const rootReducer = {
  auth: authReducer,
  user: userReducer,
  film: filmReducer,
};