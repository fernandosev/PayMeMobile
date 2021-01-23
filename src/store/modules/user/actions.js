export function signinRequest(email = "", password = "") {
  return {
    type: "@user/SIGNIN_REQUEST",
    payload: { email, password },
  };
}
