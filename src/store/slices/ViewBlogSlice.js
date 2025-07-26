import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  error: null,
  loading: false,
};

export const ViewBlogSlice = createSlice({
  name: "ViewBlog",
  initialState,
  reducers: {
    changeBlog: (state, action) => {
      state.data = action.payload;
      (state.error = null), (state.loading = false);
    },
    fetchBlog(state, action) {},
    fetchBlogReq(state, action) {
      state.loading = true;
      state.error = null;
    },
    fetchBlogSuccessfull(state, action) {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
    },
    fetchBlogFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.data = {};
    },
  },
});

export const {
  changeBlog,
  fetchBlog,
  fetchBlogReq,
  fetchBlogSuccessfull,
  fetchBlogFailure,
} = ViewBlogSlice.actions;

export default ViewBlogSlice.reducer;
