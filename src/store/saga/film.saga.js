import {put, takeEvery} from 'redux-saga/effects';

import {db, storage} from '../../firebase.config';
import {addDoc, collection, getDocs, deleteDoc, doc, getDoc} from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';

import {
  addFilmFailure,
  addFilmSuccess,
  deleteFilmFailure,
  deleteFilmSuccess,
  getFilmListFailure,
  getFilmListSuccess
} from '../actions/filmsActions';
import {ADD_FILM, DELETE_FILM, GET_FILM_LIST} from '../actions/actionTypes';

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

function* deleteFilmSaga(action) {
  try {
    const filmId = action.payload;

    const filmDocRef = doc(db, 'films', filmId);
    const filmSnapshot = yield getDoc(filmDocRef);
    const filmData = filmSnapshot.data();

    const imageURL = filmData.image;
    const imageRef = ref(storage, imageURL);
    yield deleteObject(imageRef);

    yield deleteDoc(doc(db, 'films', filmId));

    const querySnapshot = yield getDocs(collection(db, 'films'));
    const films = querySnapshot.docs.map((doc) => doc.data());

    yield put(getFilmListSuccess(films));
    yield put(deleteFilmSuccess());
    window.alert('Film deleted!!!!');
  } catch (error) {
    yield put(deleteFilmFailure(error.message))
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
  yield takeEvery(DELETE_FILM, deleteFilmSaga)
  yield takeEvery(GET_FILM_LIST, getFilmListSaga)
}
