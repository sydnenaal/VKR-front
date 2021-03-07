import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { AuthReducer } from "@vkr/app-auth";

const persistConfig = {
  key: "root",
  storage: storage,
  debug: true,
};

export const composeStoreWithModules = (modulesReducers) =>
  createStore(
    persistReducer(
      persistConfig,
      combineReducers({ ...modulesReducers, auth: AuthReducer })
    ),
    composeWithDevTools(applyMiddleware(thunk))
  );
