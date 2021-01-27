import Toast from "react-native-toast-message";
import { takeLatest, call, put, all, select } from "redux-saga/effects";
import api from "~/services/api";
import { navigate } from "~/services/NavigationService";
import {
  signinFailure,
  signupFailure,
  signupSuccess,
  signinSuccess,
  validateAccountSuccess,
  validateAccountFailure,
} from "./actions";

function* signup({ payload }) {
  const { name, email, password } = payload;

  const body = {
    name,
    email,
    password,
  };

  try {
    const response = yield call(api.post, `/signup`, body);

    yield put(signupSuccess());

    Toast.show({
      text1: "Success!",
      text2: response.data.messageEN,
      position: "bottom",
      type: "success",
    });

    yield navigate("SignIn");
  } catch (err) {
    Toast.show({
      text1: "Error!",
      text2: err.response.data.errorMessageEN,
      position: "bottom",
      type: "error",
    });

    yield put(signupFailure());
  }
}

function* signin({ payload }) {
  const { email, password } = payload;

  const body = {
    email,
    password,
  };

  try {
    const response = yield call(api.post, `/signin`, body);

    yield put(
      signinSuccess(
        response.data.id,
        response.data.name,
        response.data.email,
        response.data.status,
        response.data.token
      )
    );

    // Toast.show({
    //   text1: "Success!",
    //   text2: response.data.messageEN,
    //   position: "bottom",
    //   type: "success",
    // });
  } catch (err) {
    Toast.show({
      text1: "Error!",
      text2: err.response.data.errorMessageEN,
      position: "bottom",
      type: "error",
    });

    yield put(signinFailure());
  }
}

function* validateAccount({ payload }) {
  const { code } = payload;
  const token = yield select((state) => state.user.token);
  const id = yield select((state) => state.user.id);

  api.defaults.headers["access-token"] = token;

  const body = {
    id,
    code: Number(code),
  };

  try {
    const response = yield call(api.post, `/validateUser`, body);

    yield put(validateAccountSuccess(response.data.status));

    Toast.show({
      text1: "Success!",
      text2: response.data.messageEN,
      position: "bottom",
      type: "success",
    });
  } catch (err) {
    Toast.show({
      text1: "Error!",
      text2: err.response.data.errorMessageEN,
      position: "bottom",
      type: "error",
    });

    yield put(validateAccountFailure());
  }
}

export default all([
  takeLatest("@user/SIGNUP_REQUEST", signup),
  takeLatest("@user/SIGNIN_REQUEST", signin),
  takeLatest("@user/VALIDATE_ACCOUNT_REQUEST", validateAccount),
]);
