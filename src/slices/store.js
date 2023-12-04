import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Users/userSlice";
import flightReducer from "./Flights/flightSlice";
import bookingReducer from "./Bookings/bookingSlice";
import { apiSlice } from "./apiSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    flights: flightReducer,
    bookings: bookingReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
