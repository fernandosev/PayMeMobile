import AsyncStorage from "@react-native-community/async-storage";
import { persistReducer } from "redux-persist";

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "PayMe",
      storage: AsyncStorage,
      whitelist: ["user"],
    },
    reducers
  );

  return persistedReducer;
};
