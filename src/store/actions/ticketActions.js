import {
  BOOK_TICKET,
  BOOK_TICKET_FAILURE,
  BOOK_TICKET_SUCCESS,
  GET_TICKETS,
  GET_TICKETS_FAILURE,
  GET_TICKETS_SUCCESS,
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

export const getTickets = (userId) => ({
  type: GET_TICKETS,
  payload: userId,
});

export const getTicketsSuccess = (payload) => ({
  type: GET_TICKETS_SUCCESS,
  payload
});

export const getTicketsFailure = (error) => ({
  type: GET_TICKETS_FAILURE,
  payload: error,
});
