import {call, put, takeEvery} from 'redux-saga/effects';
import {
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import {db} from '../../firebase.config';

import {
  deleteUserFailure,
  deleteUserSuccess,
  getUsersListFailure,
  getUsersListSuccess,
  requestDeleteAccountFailure,
  requestDeleteAccountSuccess, updateUserFailure, updateUserSuccess,
} from '../actions/userActions';
import {DELETE_USER, GET_USERS_LIST, REQUEST_DELETE_ACCOUNT, UPDATE_USER} from '../actions/actionTypes';
import {deleteTicketsSuccess} from '../actions/ticketActions';

function* getUserListSaga() {
  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('role', '==', 'user'));

    const querySnapshot = yield getDocs(q);

    const userList = [];
    querySnapshot.forEach((document) => {
      userList.push({id: document.id, ...document.data()});
    });

    yield put(getUsersListSuccess(userList));
  } catch (error) {
    yield put(getUsersListFailure(error.message));
  }
}

function* makeRequestToDeleteAccount(action) {
  try {
    const userId = action.payload;

    const userRef = doc(collection(db, 'users'), userId);
    yield updateDoc(userRef, {requestDeleteAccount: true});

    yield put(requestDeleteAccountSuccess());
    window.alert('Request sent successfully!!!!');
  } catch (error) {
    yield put(requestDeleteAccountFailure(error.message));
  }
}

function* deleteUserSaga(action) {
  try {
    const userId = action.payload;

    yield call(deleteDoc, doc(db, 'users', userId));

    const usersCollection = collection(db, 'users');
    const usersQuerySnapshot = yield call(getDocs, usersCollection);
    const userList = usersQuerySnapshot.docs.map((document) => document.data()).filter((user) => user.role === 'user');

    const ticketsCollection = collection(db, 'tickets');
    const ticketsQuerySnapshot = yield call(getDocs, ticketsCollection);
    const ticketsToDelete = ticketsQuerySnapshot.docs.filter((document) => document.data().userID === userId);

    for (const ticketDoc of ticketsToDelete) {
      yield call(deleteDoc, doc(db, 'tickets', ticketDoc.id));
    }

    yield put(getUsersListSuccess(userList));
    yield put(deleteUserSuccess());
    yield put(deleteTicketsSuccess());
    window.alert('User deleted!!!!');
  } catch (error) {
    yield put(deleteUserFailure(error.message));
  }
}

function* updateUserSaga(action) {
  try {
    const {userId, firstName, lastName} = action.payload;

    const userDocRef = doc(db, 'users', userId);
    yield call(updateDoc, userDocRef, {
      firstName: firstName,
      lastName: lastName,
    });

    yield put(updateUserSuccess());
    window.alert('User updated!!!');
  } catch (error) {
    yield put(updateUserFailure(error.message));
  }
}

export function* userSaga() {
  yield takeEvery(GET_USERS_LIST, getUserListSaga);
  yield takeEvery(REQUEST_DELETE_ACCOUNT, makeRequestToDeleteAccount);
  yield takeEvery(DELETE_USER, deleteUserSaga);
  yield takeEvery(UPDATE_USER, updateUserSaga);
}
