import produce from "immer";

const INITIAL_STATE = {
  name: "Fernando Severino Almeida",
  email: "fernandosevjipa@gmail.com",
  status: null,
  token: null,
  loadingLogin: false,
  loadingSignUp: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@user/SIGNIN_REQUEST": {
        draft.loadingLogin = true;
        break;
      }

      case "@user/SIGNIN_SUCCESS": {
        draft.name = action.payload.name;
        draft.email = action.payload.email;
        draft.status = action.payload.status;
        draft.token = action.payload.token;
        draft.loadingLogin = false;
        break;
      }

      case "@user/SIGNIN_FAILURE": {
        draft.loadingLogin = false;
        break;
      }

      case "@user/SIGNUP_REQUEST": {
        draft.loadingSignUp = true;
        break;
      }

      case "@user/SIGNUP_SUCCESS": {
        draft.loadingSignUp = false;
        break;
      }

      case "@user/SIGNUP_FAILURE": {
        draft.loadingSignUp = false;
        break;
      }
    }
  });
}
