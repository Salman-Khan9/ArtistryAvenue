import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ArtReducer from "../Slices/Artdataslice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, ArtReducer);

const store = configureStore({
  reducer: {
    Art: persistedReducer,
  },
});

export const persistor = persistStore(store);
export { store };
export default store;
