export function signinRequest(email, password) {
  return {
    type: "@user/SIGNIN_REQUEST",
    payload: { email, password },
  };
}

export function signinSuccess(id, name, email, status, token) {
  return {
    type: "@user/SIGNIN_SUCCESS",
    payload: { id, name, email, status, token },
  };
}

export function signinFailure() {
  return {
    type: "@user/SIGNIN_FAILURE",
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

export function validateAccountRequest(code) {
  return {
    type: "@user/VALIDATE_ACCOUNT_REQUEST",
    payload: { code },
  };
}

export function validateAccountSuccess(status) {
  return {
    type: "@user/VALIDATE_ACCOUNT_SUCCESS",
    payload: { status },
  };
}

export function validateAccountFailure() {
  return {
    type: "@user/VALIDATE_ACCOUNT_FAILURE",
  };
}
