import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";
import { handlePending, handleRejected } from "../common";

const slice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isRefreshing: false,
    isLoggedIn: false,
    loading: null,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state) => {
        handleRejected;
        state.isLoggedIn = false;
      })
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state) => {
        handleRejected;
        state.isLoggedIn = false;
      })
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(refreshUser.pending, (state) => {
        handlePending;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      }),
});

export default slice.reducer;