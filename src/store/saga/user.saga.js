import {put, takeEvery} from 'redux-saga/effects';

import {
  getUsersListFailure,
  getUsersListSuccess,
  requestDeleteAccountFailure,
  requestDeleteAccountSuccess
} from '../actions/userActions';
import {GET_USERS_LIST, REQUEST_DELETE_ACCOUNT} from '../actions/actionTypes';

import {collection, getDocs, query, where, updateDoc, doc} from 'firebase/firestore';
import {db} from '../../firebase.config';

function* getUserListSaga() {
  try {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("role", "==", "user"));

    const querySnapshot = yield getDocs(q);

    const userList = [];
    querySnapshot.forEach((doc) => {
      userList.push({id: doc.id, ...doc.data()});
    });

    yield put(getUsersListSuccess(userList));
  } catch (error) {
    yield put(getUsersListFailure(error.message))
  }
}

function* makeRequestToDeleteAccount(action) {
  try {
    const userId = action.payload;

    const userRef = doc(collection(db, 'users'), userId);
    yield updateDoc(userRef, { requestDeleteAccount: true });

    yield put(requestDeleteAccountSuccess());
    window.alert('Request sent successfully!!!!')
  } catch (error) {
    yield put(requestDeleteAccountFailure(error.message))
  }
}

export function* userSaga() {
  yield takeEvery(GET_USERS_LIST, getUserListSaga);
  yield takeEvery(REQUEST_DELETE_ACCOUNT, makeRequestToDeleteAccount);
}