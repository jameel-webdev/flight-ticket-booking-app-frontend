import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Users/userSlice";
import { apiSlice } from "./apiSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: false,
});

export default store;
