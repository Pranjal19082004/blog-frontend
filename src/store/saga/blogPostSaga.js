import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  reqPostBlog,
  PostBlogSuccessfull,
  PostBlogFailed,
} from "../slices/BlogPostSlice";
const API_URL = import.meta.env.VITE_API_URL;
import axios from "axios";
function* postBlog(action) {
  try {
    yield put(reqPostBlog());
    let data = action.payload;
   
    const res = yield call(axios.post, `${API_URL}/blog/addblog`, data,{
        headers:{
            Authorization:localStorage.getItem("auth_token")
        }
    });
    yield put(PostBlogSuccessfull(res.data.data.token));
  } catch (e) {
    yield put(PostBlogFailed());
  }
}

// watcher saga which for action type and launch particular workersaga for that action type
function* postBlogSaga() {
  yield takeEvery("Blog/PostBlog", postBlog);
}
export default postBlogSaga;
