import {put, takeEvery} from 'redux-saga/effects';
import {db} from '../../firebase.config';
import {addDoc, collection, getDocs, query, where} from 'firebase/firestore';

import {bookedTicketFailure, bookedTicketSuccess, getTicketsFailure, getTicketsSuccess} from '../actions/ticketActions';
import {BOOK_TICKET, GET_TICKETS} from '../actions/actionTypes';
import {getFilmListFailure, getFilmListSuccess} from "../actions/filmsActions";


function* bookTicketSaga(action) {
  const {userId, filmId, selectedDate, ticketQuantity} = action.payload;

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

function* getTicketsSaga(action) {
  try {
    const userId = action.payload;

    const ticketsRef = collection(db, "tickets");
    const q = query(ticketsRef, where("userID", "==", userId));

    const querySnapshot = yield getDocs(q);

    const ticketsList = [];
    querySnapshot.forEach((doc) => {
      ticketsList.push({id: doc.id, ...doc.data()});
    });

    yield put(getTicketsSuccess(ticketsList));
  } catch (error) {
    yield put(getTicketsFailure(error.message));
  }
}

export function* ticketSaga() {
  yield takeEvery(BOOK_TICKET, bookTicketSaga);
  yield takeEvery(GET_TICKETS, getTicketsSaga);
}
