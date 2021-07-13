import {all, fork, takeLatest, put, delay, call} from 'redux-saga/effects';
import axios from 'axios';
import {LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_IN_REQUEST,
  LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOG_OUT_REQUEST,
  SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST,
  FOLLOW_REQUEST, UNFOLLOW_REQUEST, FOLLOW_SUCCESS,
  UNFOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_FAILURE,
  LOAD_USER_INFO_REQUEST, LOAD_USER_INFO_SUCCESS, LOAD_USER_INFO_FAILURE, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, CHANGE_NICKNAME_REQUEST} from '../reducers/user';

function loginAPI(data) {
  return axios.post('/user/login', data);
}
function logoutAPI() {
  return axios.post('/user/logout');
}
function loadUserAPI() {
  return axios.get('/user', {
    withCredentials: true,
  });
}
function signUpAPI(data) {
  return axios.post('/user', data);
}
function followAPI(data) {
  return axios.post('/api/follow', data);
}
function unfollowAPI(data) {
  return axios.post('/api/unfollow', data);
}
function changeNicknameAPI(data) {
  return axios.patch('/user/nickname', {nickname: data});
}

function* logIn(action) {
  try {
    const result = yield call(loginAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: LOG_IN_FAILURE,
      error: error.response.data,
    });
  }
}

function* logOut() {
  yield call(logoutAPI);
  try {
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: error.response.data,
    });
  }
}
function* loadUser(action) {
  try {
    const result = yield call(loadUserAPI, action.data);
    yield put({
      type: LOAD_USER_INFO_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_USER_INFO_FAILURE,
      error: error.response.data,
    });
  }
}
function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    console.log(result);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: error.response.data,
    });
  }
}
function* follow(action) {
  yield delay(1000);
  try {
    yield put({
      type: FOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: FOLLOW_FAILURE,
      error: error.response.data,
    });
  }
}
function* unfollow(action) {
  yield delay(1000);
  try {
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: UNFOLLOW_FAILURE,
      error: error.response.data,
    });
  }
}
function* changeNickname(action) {
  yield call();
  try {
    yield put({
      type: CHANGE_NICKNAME_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: CHANGE_NICKNAME_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogout() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}
function* watchLoadUser() {
  yield takeLatest(LOAD_USER_INFO_REQUEST, loadUser);
}
function* watchChangeNickname() {
  yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
    fork(watchLoadUser),
    fork(watchSignUp),
    fork(watchFollow),
    fork(watchUnfollow),
    fork(watchChangeNickname),
  ]);
}
