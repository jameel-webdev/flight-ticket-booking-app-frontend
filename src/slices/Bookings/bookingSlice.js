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
    setBookings: (state, action) => {
      state.bookingInfo = { ...state.bookingInfo, ...action.payload };
      localStorage.setItem("bookingInfo", JSON.stringify(action.payload));
    },
    removeBookings: (state, action) => {
      state.bookingInfo = null;
      localStorage.removeItem("bookingInfo");
    },
  },
});

export const { setBookings, removeBookings } = bookingSlice.actions;
export default bookingSlice.reducer;
