import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isAdminLoggedIn: false,
    adminInfo: {},
    isLoading: false
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    logIn: (state) => {
      state.isAdminLoggedIn = true;
    },
    logOut: (state) => {
      state.isAdminLoggedIn = false;
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    }
  }
});
// Action creators are generated for each case reducer function
export const { logIn, setLoading, logOut } = globalSlice.actions;

export default globalSlice.reducer;
