import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookingInfo: localStorage.getItem("bookingInfo")
    ? JSON.parse(localStorage.getItem("bookingInfo"))
    : null,
};

const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.bookingInfo = action.payload;
      localStorage.setItem("bookingInfo", JSON.stringify(action.payload));
    },
    removeCredentials: (state, action) => {
      state.bookingInfo = null;
      localStorage.removeItem("bookingInfo");
    },
  },
});

export const { setCredentials, removeCredentials } = bookingSlice.actions;
export default bookingSlice.reducer;
