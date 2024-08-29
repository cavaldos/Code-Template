import { createSlice } from "@reduxjs/toolkit";

export const globalStateSlice = createSlice({
  name: "globalState",
  initialState: {
    state: true,
  },
  reducers: {
    resetState: (state) => {
      state.state = true;
    },
  },
});

export const { resetState } = globalStateSlice.actions;
export default globalStateSlice.reducer;
