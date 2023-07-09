import {
  ADD_FILM,
  ADD_FILM_FAILURE,
  ADD_FILM_SUCCESS,
  DELETE_FILM,
  DELETE_FILM_FAILURE,
  DELETE_FILM_SUCCESS,
  GET_FILM_LIST,
  GET_FILM_LIST_FAILURE,
  GET_FILM_LIST_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  film: {
    title: null,
    description: null,
    price: null,
    startDate: null,
    endDate: null,
    image: null,
    tags: null,
  },
  films: [],
  error: null,
}

export const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILM:
      return {
        ...state,
        film: {
          title: null,
          description: null,
          price: null,
          startDate: null,
          endDate: null,
          image: null,
          tags: null,
        },
        error: null,
      };
    case ADD_FILM_SUCCESS:
      return {
        ...state,
        film: {
          title: action.payload.title,
          description: action.payload.description,
          price: action.payload.price,
          startDate: action.payload.startDate,
          endDate: action.payload.endDate,
          image: action.payload.downloadURL,
          tags: action.payload.tags,
        },
        error: null,
      };
    case ADD_FILM_FAILURE:
      return {
        ...state,
        film: {
          title: null,
          description: null,
          price: null,
          startDate: null,
          endDate: null,
          image: null,
          tags: null,
        },
        error: action.payload,
      };
    case DELETE_FILM:
      return {
        ...state,
        film: {
          title: null,
          description: null,
          price: null,
          startDate: null,
          endDate: null,
          image: null,
          tags: null,
        },
        error: null,
      };
    case DELETE_FILM_SUCCESS:
      return {
        ...state,
        film: {
          title: null,
          description: null,
          price: null,
          startDate: null,
          endDate: null,
          image: null,
          tags: null,
        },
        error: null,
      };
    case DELETE_FILM_FAILURE:
      return {
        ...state,
        film: {
          title: null,
          description: null,
          price: null,
          startDate: null,
          endDate: null,
          image: null,
          tags: null,
        },
        error: action.payload,
      };
    case GET_FILM_LIST:
      return {
        ...state,
        films: [],
        error: null,
      };
    case GET_FILM_LIST_SUCCESS:
      return {
        ...state,
        films: action.payload,
        error: null,
      };
    case GET_FILM_LIST_FAILURE:
      return {
        ...state,
        films: [],
        error: action.payload,
      };
    default:
      return state;
  }
};