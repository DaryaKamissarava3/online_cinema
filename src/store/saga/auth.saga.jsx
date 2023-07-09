import {put, call, takeEvery } from 'redux-saga/effects';
import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from '../actions/actionTypes';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../../firebase.config';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { loginUserFailure, loginUserSuccess, logoutUserSuccess, registerUserFailure, registerUserSuccess } from '../actions/authActions';
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

    yield updateProfile(user, {
      displayName: `${userData.firstName} ${userData.lastName}`,
    });

    const userRef = doc(db, 'users', user.uid);
    yield setDoc(userRef, {
      role: 'user',
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
    });

    yield put(registerUserSuccess());
    window.alert('User registration successful!');
  } catch (error) {
    yield put(registerUserFailure(error));
  }
}

function* loginUserSaga(action) {
  const { email, password } = action.payload;

  try {
    const userCredential = yield call(
      signInWithEmailAndPassword,
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    const userDocRef = doc(db, 'users', user.uid);
    const userDocSnapshot = yield call(getDoc, userDocRef);

    let userRole = null;
    if (userDocSnapshot.exists()) {
      userRole = userDocSnapshot.data().role;
    }

    const userData = {
      id: user.uid,
      email: user.email,
      displayName: user.displayName,
      role: userRole,
    };

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
