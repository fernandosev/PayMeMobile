export function signinRequest(email = "", password = "") {
  return {
    type: "@user/SIGNIN_REQUEST",
    payload: { email, password },
  };
}

export function signupRequest(name, email, password) {
  return {
    type: "@user/SIGNUP_REQUEST",
    payload: { name, email, password },
  };
}

export function signupSuccess() {
  return {
    type: "@user/SIGNUP_SUCCESS",
  };
}

export function signupFailure() {
  return {
    type: "@user/SIGNUP_FAILURE",
  };
}
