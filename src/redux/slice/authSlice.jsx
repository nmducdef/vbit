import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visitor: null,
  accessToken: "",
  status: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setVisitor: (state, action) => ({
      ...state,
      visitor: action.payload,
    }),

    logout: () => initialState,

    setToken: (state, action) => ({
      ...state,
      accessToken: action.payload,
    }),

    refreshToken: (state) => state,
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;

export const selectVisitor = (state) => state.auth.visitor;
export const selectVisitorId = (state) => state.auth?.visitor?.id || 0;
export const selectAccessToken = (state) => state?.auth?.accessToken || "";
