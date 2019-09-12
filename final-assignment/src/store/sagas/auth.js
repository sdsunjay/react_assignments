import { put, delay } from 'redux-saga/effects';

import * as actions from '../actions/index';

import axios from 'axios';

export function* logoutSaga(action) {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('expirationDate');
  yield localStorage.removeItem('localId');
  yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.logout());
}

export function* authUserSaga(action) {
  yield put(actions.authStart());
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  }
  let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCc81jg1UUrmBEDYl3fwSU90BLDzw1SeiQ';
  if(!action.isSignUp){
    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCc81jg1UUrmBEDYl3fwSU90BLDzw1SeiQ';
  }
  try {
    const response = yield(axios.post(url, authData));

    const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
    yield localStorage.setItem('token', response.data.idToken);
    yield localStorage.setItem('localId', response.data.localId);
    yield localStorage.setItem('expirationDate', expirationDate);
    yield put(actions.authSuccess(response.data.idToken, response.data.localId));
    yield put(actions.checkAuthTimeout(response.data.expiresIn));
  } catch(error) {
    yield put(actions.authFail(error.response.data.error));
  }
}

export function* authCheckStateSaga(action) {
  const token = yield localStorage.getItem('token');
  const localId = yield localStorage.getItem('localId');
  const expirationDate = yield new Date(localStorage.getItem('expirationDate'));

  if(expirationDate !== null && expirationDate > new Date()) {
    yield put(actions.authSuccess(token, localId));
    yield put(actions.checkAuthTimeout( (expirationDate.getTime() - new Date().getTime())/1000 ));
  } else {
    yield put(actions.logout());
  }
}
