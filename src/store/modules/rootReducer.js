import { combineReducers } from "redux";
import user from "./user/reducer";
import card from "./card/reducer";
import payme from "./payme/reducer";

export default combineReducers({
  user,
  card,
  payme,
});
