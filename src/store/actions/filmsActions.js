import {
  ADD_FILM,
  ADD_FILM_FAILURE,
  ADD_FILM_SUCCESS, GET_FILM_LIST, GET_FILM_LIST_FAILURE, GET_FILM_LIST_SUCCESS
} from './actionTypes';

export const addFilm = (data) => ({
  type: ADD_FILM,
  payload: data,
});

export const addFilmSuccess = (data) => ({
  type: ADD_FILM_SUCCESS,
  payload: data,
});

export const addFilmFailure = (error) => ({
  type: ADD_FILM_FAILURE,
  payload: error,
});

export const getFilmList = () => ({
  type: GET_FILM_LIST,
});

export const getFilmListSuccess = (payload) => ({
  type: GET_FILM_LIST_SUCCESS,
  payload
});

export const getFilmListFailure = (error) => ({
  type: GET_FILM_LIST_FAILURE,
  payload: error,
});