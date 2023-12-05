import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminData: localStorage.getItem("adminData")
    ? JSON.parse(localStorage.getItem("adminData"))
    : null,
};

const adminSlice = createSlice({
  name: "adminData",
  initialState,
  reducers: {
    setAllData: (state, action) => {
      state.adminData = action.payload;
      localStorage.setItem("adminData", JSON.stringify(action.payload));
    },
    removeAllData: (state, action) => {
      state.adminData = null;
      localStorage.removeItem("adminData");
    },
  },
});

export const { setCredentials, removeCredentials } = adminSlice.actions;
export default adminSlice.reducer;
