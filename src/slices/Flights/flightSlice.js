import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flightInfo: localStorage.getItem("flightInfo")
    ? JSON.parse(localStorage.getItem("flightInfo"))
    : null,
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setFlightData: (state, action) => {
      state.flightInfo = action.payload;
      localStorage.setItem("flightInfo", JSON.stringify(action.payload));
    },
    removeFlightData: (state, action) => {
      state.flightInfo = null;
      localStorage.removeItem("flightInfo");
    },
  },
});

export const { setFlightData, removeFlightData } = flightSlice.actions;
export default flightSlice.reducer;
