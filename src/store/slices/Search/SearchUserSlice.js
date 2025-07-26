import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data:[]
};

export const SearchUserSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {
    reqSearchUser: (state) => {
      state.loading = true;
    },
    SearchUser: (state, action) => {},
    SearchUserSuccessfull: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    SearchUserFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { reqSearchUser, SearchUser, SearchUserSuccessfull, SearchUserFailed } =
  SearchUserSlice.actions;

export default SearchUserSlice.reducer;
