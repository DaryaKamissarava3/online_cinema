import {
  BOOK_TICKET,
  BOOK_TICKET_FAILURE,
  BOOK_TICKET_SUCCESS,
} from './actionTypes';

export const bookedTicket = (payload) => ({
  type: BOOK_TICKET,
  payload,
});

export const bookedTicketSuccess = () => ({
  type: BOOK_TICKET_SUCCESS,
});

export const bookedTicketFailure = (error) => ({
  type: BOOK_TICKET_FAILURE,
  payload: error,
});