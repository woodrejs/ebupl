import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "navSlice",
  initialState: {
    page: false,
  },
  reducers: {
    setPage(state, action) {
      const page = action.payload;
      state.page = page;
    },
  },
});

export const { setPage } = navSlice.actions;
export default navSlice.reducer;
