import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
};

export const postBlogSlice = createSlice({
  name: "Blog",
  initialState,
  reducers: {
    reqPostBlog: (state) => {
      state.loading = true;
    },
    PostBlog: (state,action) => {},
    PostBlogSuccessfull: (state, action) => {
      state.loading = false;
      state.SignedIn = true;
      state.error = null;
    },
    PostBlogFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { reqPostBlog, PostBlog, PostBlogSuccessfull, PostBlogFailed } =
  postBlogSlice.actions;

export default postBlogSlice.reducer;
