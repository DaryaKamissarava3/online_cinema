import {put, takeEvery} from 'redux-saga/effects';

import {getUsersListFailure, getUsersListSuccess} from '../actions/userActions';
import {GET_USERS_LIST} from '../actions/actionTypes';

import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '../../firebase.config';

function* getUserListSaga(){
  try{
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("role", "==", "user"));

    const querySnapshot = yield getDocs(q);

    const userList = [];
    querySnapshot.forEach((doc) => {
      userList.push({id: doc.id, ...doc.data()});
    });

    yield put(getUsersListSuccess(userList));
  }catch (error){
    yield put(getUsersListFailure(error.message))
  }
}

export function* userSaga(){
  yield takeEvery(GET_USERS_LIST,getUserListSaga)
}