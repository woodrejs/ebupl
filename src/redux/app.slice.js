import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    lang: "PL",
  },
  reducers: {
    setLang(state, action) {
      const lang = action.payload;
      state.lang = lang;
    },
  },
});

export const { setLang } = appSlice.actions;
export default appSlice.reducer;
