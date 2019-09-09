import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
  return {
      type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
      type: actionTypes.AUTH_SUCCESS,
      idToken: token,
      userId: userId

  };
}

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('localId');
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout)
    }, expirationTime * 1000);
  };
};

export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    }
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCc81jg1UUrmBEDYl3fwSU90BLDzw1SeiQ';
    if(!isSignUp){
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCc81jg1UUrmBEDYl3fwSU90BLDzw1SeiQ';
    }
    axios.post(url, authData)
    .then(response => {
      const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
      localStorage.setItem('token', response.data.idToken);
      localStorage.setItem('localId', response.data.localId);
      localStorage.setItem('expirationDate', expirationDate);
      dispatch(authSuccess(response.data.idToken, response.data.localId));
      dispatch(checkAuthTimeout(response.data.expiresIn));
    })
    .catch(error => {
      dispatch(authFail(error.response.data.error));
    });
  };
};

export const setAuthRedirect = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT,
    path: path
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    const localId = localStorage.getItem('localId');
    const expirationDate = new Date(localStorage.getItem('expirationDate'));

    if(expirationDate !== null && expirationDate > new Date()) {
      dispatch(authSuccess(token, localId));
      dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime())/1000 ));
    } else {
      dispatch(logout());
    }
  };
};
