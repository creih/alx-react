import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import fetch from 'node-fetch';

export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));

    return fetch('/login-success.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch(loginSuccess());
      })
      .catch((error) => {
        dispatch(loginFailure());
      });
  };
};
