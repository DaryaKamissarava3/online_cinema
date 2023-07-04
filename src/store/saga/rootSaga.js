import { all } from 'redux-saga/effects';

import {authSaga} from './auth.saga';
import {filmSaga} from './film.saga';
import {userSaga} from './user.saga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    filmSaga(),
    userSaga(),
  ]);
}
