import produce from "immer";

const INITIAL_STATE = {
  cards: [],
  loading: false,
};

export default function card(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@card/CREATE_TOKEN_REQUEST": {
        draft.loading = true;
        break;
      }

      case "@card/CREATE_TOKEN_SUCESS": {
        draft.loading = false;
        draft.cards.push(action.payload.cardToken);
        break;
      }

      case "@card/CREATE_TOKEN_FAILURE": {
        draft.loading = false;
        break;
      }
    }
  });
}
