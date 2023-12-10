import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Users/userSlice";
import flightReducer from "./Flights/flightSlice";
import { apiSlice } from "./apiSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    flight: flightReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: false,
});

export default store;
