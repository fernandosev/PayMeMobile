import { all } from "redux-saga/effects";

import user from "./user/sagas";
import card from "./card/sagas";

export default function* rootReducer() {
  return yield all([user, card]);
}
