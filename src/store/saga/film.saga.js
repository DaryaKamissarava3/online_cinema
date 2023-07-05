import {put, takeEvery} from 'redux-saga/effects';

import {db} from '../../firebase.config';
import {addDoc, collection, getDocs} from 'firebase/firestore';

import {addFilmFailure, addFilmSuccess, getFilmListFailure, getFilmListSuccess} from '../actions/filmsActions';
import {ADD_FILM, GET_FILM_LIST} from '../actions/actionTypes';

function* addFilmSaga(action) {
  try {
    const film = action.payload;

    const docRef = yield addDoc(collection(db, 'films'), {
      title: film.title,
      description: film.description,
      price: film.price,
      startDate: film.startDate,
      endDate: film.endDate,
      image: film.downloadURL,
      tags: film.tags
    });

    yield put(addFilmSuccess(film));
    window.alert('Film added!!!!');
  } catch (error) {
    yield put(addFilmFailure(error.message));
  }
}

function* getFilmListSaga() {
  try {
    const querySnapshot = yield getDocs(collection(db, 'films'));
    const films = [];

    querySnapshot.forEach((doc) => {
      films.push({id: doc.id, ...doc.data()});
    });

    yield put(getFilmListSuccess(films))
  } catch (error) {
    yield put(getFilmListFailure(error.message))
  }
}

export function* filmSaga() {
  yield takeEvery(ADD_FILM, addFilmSaga)
  yield takeEvery(GET_FILM_LIST, getFilmListSaga)
}
