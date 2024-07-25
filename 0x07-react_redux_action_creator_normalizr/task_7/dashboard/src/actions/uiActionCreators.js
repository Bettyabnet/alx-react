import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './uiActionTypes';

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error,
});

export const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN,
      user: { email, password },
    });

    return fetch('/login-success.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch(loginSuccess(data.result));
      })
      .catch((error) => {
        dispatch(loginFailure(error));
      });
  };
};
