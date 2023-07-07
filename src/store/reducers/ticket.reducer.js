import {
  BOOK_TICKET,
  BOOK_TICKET_FAILURE,
  BOOK_TICKET_SUCCESS,
  GET_TICKETS,
  GET_TICKETS_FAILURE,
  GET_TICKETS_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  tickets:[],
  ticket:{
    loading: false,
  },
  error: null,
}

export const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_TICKET:
      return {
        ...state,
        ticket:{
          loading: false,
        },
        error: null,
      };
    case BOOK_TICKET_SUCCESS:
      return {
        ...state,
        ticket:{
          loading: true,
        },
        error: null,
      };
    case BOOK_TICKET_FAILURE:
      return {
        ...state,
        ticket:{
          loading: false,
        },
        error: action.payload,
      };
    case GET_TICKETS:
      return {
        ...state,
        tickets: [],
        error: null,
      };
    case GET_TICKETS_SUCCESS:
      return {
        ...state,
        tickets: action.payload,
        error: null,
      };
    case GET_TICKETS_FAILURE:
      return {
        ...state,
        tickets: [],
        error: action.payload,
      };
    default:
      return state
  }
}