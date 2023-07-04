import {put, takeEvery} from 'redux-saga/effects';

import {db} from '../../firebase.config';
import {addDoc, collection} from 'firebase/firestore';

import {addFilmFailure, addFilmSuccess} from '../actions/filmsActions';
import {ADD_FILM} from '../actions/actionTypes';

function* addFilmSaga(action) {
  try {
    const film= action.payload;

    const docRef = yield addDoc(collection(db, 'films'), {
      title:film.title,
      description:film.description,
      price:film.price,
      startDate:film.startDate,
      endDate:film.endDate,
      image: film.downloadURL,
      tags:film.tags
    });

    yield put(addFilmSuccess(film));
    window.alert('Film added!!!!');
  } catch (error) {
    yield put(addFilmFailure(error.message));
  }
}

export function* filmSaga() {
  yield takeEvery(ADD_FILM, addFilmSaga)
}
