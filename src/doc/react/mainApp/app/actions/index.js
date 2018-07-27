import {
  FETCH_DATA_REQUEST_START,
  FETCH_DATA_REQUEST_FINISH,
  FETCH_DATA_RECEIVE,
  FETCH_DATA_FAILURE,
} from '../constants';
import { apiKey } from '../config';

export const fetchDataRequestStart = () => ({
  type: FETCH_DATA_REQUEST_START,
  payload: true,
});

export const fetchDataRequestFinish = () => ({
  type: FETCH_DATA_REQUEST_FINISH,
  payload: false,
});

export const fetchDataReceive = data => ({
  type: FETCH_DATA_RECEIVE,
  payload: data,
});

export const fetchDataFailure = message => ({
  type: FETCH_DATA_FAILURE,
  payload: message,
});

export const fetchMyData = pageNumber => (dispatch) => {
  dispatch(fetchDataRequestStart());
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=love&page=${pageNumber}`)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(fetchDataRequestFinish());
      return response.json();
    })
    .then(data => dispatch(fetchDataReceive(data)))
    .catch((error) => {
      dispatch(fetchDataRequestFinish());
      dispatch(fetchDataFailure(error.message));
    });
};
