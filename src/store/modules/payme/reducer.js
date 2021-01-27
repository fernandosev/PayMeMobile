import produce from "immer";

const INITIAL_STATE = {
  theme: "light",
};

export default function payme(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@payme/SET_APP_THEME": {
        draft.theme = action.payload.theme;
        break;
      }
    }
  });
}
