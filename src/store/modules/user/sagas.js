import Toast from "react-native-toast-message";
import { takeLatest, call, put, all, select } from "redux-saga/effects";
import api from "~/services/api";
import { navigate } from "~/services/NavigationService";
import { signupFailure, signupSuccess } from "./actions";

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

export default all([takeLatest("@user/SIGNUP_REQUEST", signup)]);
