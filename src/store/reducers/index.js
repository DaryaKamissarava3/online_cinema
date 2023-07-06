import {authReducer} from './auth.reducer';
import {userReducer} from './user.reducer';
import {filmReducer} from './film.reducer';
import {ticketReducer} from "./ticket.reducer";

export const rootReducer = {
  auth: authReducer,
  user: userReducer,
  film: filmReducer,
  ticket: ticketReducer,
};