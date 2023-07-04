import {
  ADD_FILM,
  ADD_FILM_FAILURE,
  ADD_FILM_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  title: null,
  description: null,
  price: null,
  startDate: null,
  endDate: null,
  image: null,
  tags: null,
  error: null,
}

export const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILM:
      return {
        ...state,
        title: null,
        description: null,
        price: null,
        startDate: null,
        endDate: null,
        image: null,
        tags: null,
        error: null,
      };
    case ADD_FILM_SUCCESS:
      return {
        ...state,
        title: action.payload.title,
        description: action.payload.description,
        price: action.payload.price,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        image: action.payload.downloadURL,
        tags: action.payload.tags,
        error: null,
      };
    case ADD_FILM_FAILURE:
      return {
        ...state,
        title: null,
        description: null,
        price: null,
        startDate: null,
        endDate: null,
        image: null,
        tags: null,
        error: action.payload,
      };
    default:
      return state;
  }
};