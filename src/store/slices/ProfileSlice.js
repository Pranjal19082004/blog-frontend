import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: {},
};

export const ProfileSlice = createSlice({
  name: "Profile",
  initialState,
  reducers: {
    reqProfileInfo: (state) => {
      state.loading = true;
    },
    getProfile: () => {},
    fetchProfileSuccessfull: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchProfileFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { reqProfileInfo, getProfile, fetchProfileSuccessfull, fetchProfileFailed } =
  ProfileSlice.actions;

export default ProfileSlice.reducer;
