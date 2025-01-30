import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      return !state;
    },
  },
});

// Action creators are generated for each case reducer function
export const isDarkModeSelector = (state)=>state.mode
export const { toggleMode } = modeSlice.actions;

export default modeSlice.reducer;
