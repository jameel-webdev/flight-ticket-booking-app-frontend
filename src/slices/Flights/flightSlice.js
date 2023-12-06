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
    setFlights: (state, action) => {
      state.flightInfo = action.payload;
      localStorage.setItem("flightInfo", JSON.stringify(action.payload));
    },
    removeFlights: (state, action) => {
      state.flightInfo = null;
      localStorage.removeItem("flightInfo");
    },
  },
});

export const { setFlights, removeFlights } = flightSlice.actions;
export default flightSlice.reducer;
