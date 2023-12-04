import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flightInfo: localStorage.getItem("flightInfo")
    ? JSON.parse(localStorage.getItem("flightInfo"))
    : null,
};

const flightSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.flightInfo = action.payload;
      localStorage.setItem("flightInfo", JSON.stringify(action.payload));
    },
    removeCredentials: (state, action) => {
      state.flightInfo = null;
      localStorage.removeItem("flightInfo");
    },
  },
});

export const { setCredentials, removeCredentials } = flightSlice.actions;
export default flightSlice.reducer;
