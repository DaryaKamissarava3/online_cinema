import {call, put, takeEvery} from 'redux-saga/effects';

import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import {deleteObject, ref} from 'firebase/storage';
import {db, storage} from '../../firebase.config';

import {
  addFilmFailure,
  addFilmSuccess,
  deleteFilmFailure,
  deleteFilmSuccess,
  getFilmListFailure,
  getFilmListSuccess, updateFilmFailure, updateFilmSuccess,
} from '../actions/filmsActions';
import {ADD_FILM, DELETE_FILM, GET_FILM_LIST, UPDATE_FILM} from '../actions/actionTypes';

function* addFilmSaga(action) {
  try {
    const film = action.payload;

    yield addDoc(collection(db, 'films'), {
      title: film.title,
      description: film.description,
      price: film.price,
      startDate: film.startDate,
      endDate: film.endDate,
      image: film.downloadURL,
      tags: film.tags,
    });

    yield put(addFilmSuccess());
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
    const films = querySnapshot.docs.map((document) => document.data());

    yield put(getFilmListSuccess(films));
    yield put(deleteFilmSuccess());
    window.alert('Film deleted!!!!');
  } catch (error) {
    yield put(deleteFilmFailure(error.message));
  }
}

function* getFilmListSaga() {
  try {
    const querySnapshot = yield getDocs(collection(db, 'films'));
    const films = [];

    querySnapshot.forEach((document) => {
      films.push({id: document.id, ...document.data()});
    });

    yield put(getFilmListSuccess(films));
  } catch (error) {
    yield put(getFilmListFailure(error.message));
  }
}

function* updateFilmSaga(action) {
  try {
    const {id, title, description, price, startDate, endDate, tags} = action.payload;

    const filmDocRef = doc(db, 'films', id);

    yield call(updateDoc, filmDocRef, {
      title: title,
      description: description,
      price: price,
      startDate: startDate,
      endDate: endDate,
      tags: tags,
    });

    const querySnapshot = yield getDocs(collection(db, 'films'));
    const films = [];

    querySnapshot.forEach((document) => {
      films.push({id: document.id, ...document.data()});
    });
    yield put(updateFilmSuccess());
    yield put(getFilmListSuccess(films));

    window.alert('Film updated successfully!');
  } catch (error) {
    yield put(updateFilmFailure(error.message));
  }
}

export function* filmSaga() {
  yield takeEvery(ADD_FILM, addFilmSaga);
  yield takeEvery(DELETE_FILM, deleteFilmSaga);
  yield takeEvery(GET_FILM_LIST, getFilmListSaga);
  yield takeEvery(UPDATE_FILM, updateFilmSaga);
}
