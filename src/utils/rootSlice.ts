import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    inc: (state) => {
      state.count += 1;
    },
    dec: (state) => {
      state.count -= 1;
    },
    incByValue: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { inc, dec, incByValue } = rootSlice.actions;

export default rootSlice.reducer;
