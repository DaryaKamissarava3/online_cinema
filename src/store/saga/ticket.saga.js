import {put, takeEvery} from 'redux-saga/effects';
import {db} from '../../firebase.config';
import {addDoc, collection, deleteDoc, doc, getDocs, query, where} from 'firebase/firestore';

import {
  bookedTicketFailure,
  bookedTicketSuccess,
  deleteTicketsFailure, deleteTicketsSuccess,
  getTicketsFailure,
  getTicketsSuccess
} from '../actions/ticketActions';
import {BOOK_TICKET, DELETE_TICKETS, GET_TICKETS} from '../actions/actionTypes';

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

function* deleteTicketsSaga(action) {
  try {
    const ticketId = action.payload;

    yield deleteDoc(doc(db, 'tickets', ticketId));

    const querySnapshot = yield getDocs(collection(db, 'tickets'));
    const tickets = querySnapshot.docs.map((doc) => doc.data());

    yield put(getTicketsSuccess(tickets));
    yield put(deleteTicketsSuccess());
    window.alert('Tickets deleted!!!!');
  } catch (error) {
    put(deleteTicketsFailure(error.message))
  }
}

export function* ticketSaga() {
  yield takeEvery(BOOK_TICKET, bookTicketSaga);
  yield takeEvery(GET_TICKETS, getTicketsSaga);
  yield takeEvery(DELETE_TICKETS, deleteTicketsSaga);
}
