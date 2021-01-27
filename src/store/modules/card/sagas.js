import {
  all,
  call,
  select,
  put,
  takeLatest,
  takeEvery,
} from "redux-saga/effects";
import api, { CancelToken, isCancel } from "~/services/api";
import NavigationService from "~/services/NavigationService";

let signal;

export function* createToken({ payload }) {}

export default all([takeLatest("@card/CREATE_TOKEN_REQUEST", createToken)]);
