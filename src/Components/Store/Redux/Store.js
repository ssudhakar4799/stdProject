import rootReducer from "./rootReducer";
// import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

const persistConfig = {
    key:"SC",
    storage,
    whitelist:["auth"]
};

const persistedReducer = persistReducer(persistConfig,rootReducer);
const store = configureStore({
    reducer:persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
});

const persistStores = persistStore(store);
export {store,persistStores};