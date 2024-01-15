import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: [],
      isFetching: false,
      isError: false,
    },
  },
  reducer: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.isError = false;
    },
    loginError: (state) => {
      state.login.isError = true;
      state.login.isFetching = false;
    },
  },
});

export const { loginStart, loginSuccess, loginError } = authSlice.actions;
export default authSlice.reducer;
