import produce from "immer";

const INITIAL_STATE = {
  name: "Fernando Severino Almeida",
  email: "fernandosevjipa@gmail.com",
  loading: false,
};

export default function albums(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@user/SIGNIN_REQUEST": {
        draft.loading = true;
        break;
      }
    }
  });
}
