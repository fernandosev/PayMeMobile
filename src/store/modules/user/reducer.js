import produce from "immer";

const INITIAL_STATE = {
  token: null,
  name: "Fernando Severino Almeida",
  email: "fernandosevjipa@gmail.com",
  status: null,
  loading: false,
  loadingSignUp: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@user/SIGNIN_REQUEST": {
        draft.loading = true;
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
