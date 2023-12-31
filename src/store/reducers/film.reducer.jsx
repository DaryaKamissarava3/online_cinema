import {
  ADD_FILM,
  ADD_FILM_FAILURE,
  ADD_FILM_SUCCESS,
  DELETE_FILM,
  DELETE_FILM_FAILURE,
  DELETE_FILM_SUCCESS,
  GET_FILM_LIST,
  GET_FILM_LIST_FAILURE,
  GET_FILM_LIST_SUCCESS,
  UPDATE_FILM,
  UPDATE_FILM_FAILURE,
  UPDATE_FILM_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  films: [],
  error: null,
};

export const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILM:
      return {
        ...state,
        error: null,
      };
    case ADD_FILM_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case ADD_FILM_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_FILM:
      return {
        ...state,
        error: null,
      };
    case DELETE_FILM_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case DELETE_FILM_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_FILM:
      const filmIndex = state.films.findIndex((film) => film.id === action.payload.id);

      if (filmIndex !== -1) {
        const updatedFilms = [...state.films];
        updatedFilms[filmIndex] = action.payload;

        return {
          ...state,
          films: updatedFilms,
          error: null,
        };
      }
      return state;
    case UPDATE_FILM_SUCCESS:
      return {
        ...state,
        error: null,
      }
    case UPDATE_FILM_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
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
