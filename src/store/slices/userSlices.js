import { createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";

const initialState = {
  loading: false,
  error: null,
  signedIn: !!localStorage.getItem("auth_token"),
  data: {},
};

export const SignInSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    reqSignedIn: (state) => {
      state.loading = true;
    },
    signIn: (state) => {},
    signInSuccessfull: (state, action) => {
      state.loading = false;
      state.SignedIn = true;
      state.data.token = action.payload;
      location.replace("/Profile");
    },
    signInFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signOut: (state) => {
      state.signedIn = false;
      localStorage.removeItem("auth_token");
      redirect("/signIn");
    },
  },
});

// Action creators are generated for each case reducer function
export const { reqSignedIn, signIn, signInSuccessfull, signInFailed, signOut } =
  SignInSlice.actions;

export default SignInSlice.reducer;
