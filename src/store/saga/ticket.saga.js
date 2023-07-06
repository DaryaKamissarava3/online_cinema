import { put, takeEvery} from 'redux-saga/effects';
import {db} from '../../firebase.config';
import {addDoc, collection} from 'firebase/firestore';

import {bookedTicketFailure, bookedTicketSuccess} from '../actions/ticketActions';
import {BOOK_TICKET} from '../actions/actionTypes';


function* bookTicketSaga(action) {
  const { userId, filmId, selectedDate,ticketQuantity } = action.payload;
  console.log('from,saga',userId,filmId,selectedDate);
  try {
    const docRef = yield addDoc(collection(db, 'tickets'), {
      userID: userId,
      filmID: filmId,
      filmDate: selectedDate,
      ticketQuantity: ticketQuantity,
    });

    yield put(bookedTicketSuccess());
    window.alert('Tickets booked!!!');
  } catch (error) {
    yield put(bookedTicketFailure(error.message));
  }
}


export function* ticketSaga() {
  yield takeEvery(BOOK_TICKET, bookTicketSaga);
}
