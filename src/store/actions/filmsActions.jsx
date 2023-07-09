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

export const deleteFilm = (payload) => ({
  type: DELETE_FILM,
  payload,
});

export const deleteFilmSuccess = (payload) => ({
  type: DELETE_FILM_SUCCESS,
  payload,
});

export const deleteFilmFailure = (error) => ({
  type: DELETE_FILM_FAILURE,
  payload: error,
});

export const getFilmList = () => ({
  type: GET_FILM_LIST,
});

export const getFilmListSuccess = (payload) => ({
  type: GET_FILM_LIST_SUCCESS,
  payload,
});

export const getFilmListFailure = (error) => ({
  type: GET_FILM_LIST_FAILURE,
  payload: error,
});
