import {
  ADD_FILM,
  ADD_FILM_FAILURE,
  ADD_FILM_SUCCESS
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