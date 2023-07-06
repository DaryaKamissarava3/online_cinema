import {
  BOOK_TICKET,
  BOOK_TICKET_FAILURE,
  BOOK_TICKET_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: null,
}

export const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_TICKET:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case BOOK_TICKET_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case BOOK_TICKET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state
  }
}