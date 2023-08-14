 import { put, call, takeEvery } from 'redux-saga/effects';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase.config';

import {
  loginUserFailure,
  loginUserSuccess,
  logoutUserSuccess,
  registerUserFailure,
  registerUserSuccess,
} from '../actions/authActions';
import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from '../actions/actionTypes';
import { clearUser, setUser } from '../actions/userActions';

function* registerUserSaga(action) {
  const userData = action.payload;

  try {
    const userCredential = yield createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password,
    );
    const user = userCredential.user;

    const userRef = doc(db, 'users', user.uid);
    yield setDoc(userRef, {
      role: 'user',
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
    });

    yield put(registerUserSuccess());
  } catch (error) {
    yield put(registerUserFailure(error));
  }
}

function* loginUserSaga(action) {
  const { email, password } = action.payload;

  try {
    const { user } = yield call(
      signInWithEmailAndPassword,
      auth,
      email,
      password,
    );

    const userDocRef = doc(db, 'users', user.uid);
    const userDocSnapshot = yield call(getDoc, userDocRef);

    const userData = {
      id: user.uid,
      email: user.email,
      firstName: null,
      lastName: null,
      role: null,
    };

    if (userDocSnapshot.exists()) {
      const { role, firstName, lastName } = userDocSnapshot.data();
      userData.role = role;
      userData.firstName = firstName;
      userData.lastName = lastName;
    }

    yield put(loginUserSuccess());
    yield put(setUser(userData));

    window.alert('User login successful!');
  } catch (error) {
    yield put(loginUserFailure());
  }
}

function* logoutUserSaga() {
  yield put(logoutUserSuccess());
  yield put(clearUser());
}

export function* authSaga() {
  yield takeEvery(REGISTER_USER, registerUserSaga);
  yield takeEvery(LOGIN_USER, loginUserSaga);
  yield takeEvery(LOGOUT_USER, logoutUserSaga);
}
