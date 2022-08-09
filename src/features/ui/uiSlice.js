import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalVisible: false,
  menuVisible: false,
  loading: false,
  menu: [],
  socialNetworks: [],
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMenuVisible: (state, action) => {
      state.menuVisible =
        typeof action.payload !== "boolean" ? false : action.payload;
    },
  },
});

export const { setMenuVisible } = uiSlice.actions;

export default uiSlice.reducer;
