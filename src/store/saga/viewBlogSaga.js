import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  fetchBlog,
  fetchBlogReq,
  fetchBlogSuccessfull,
  fetchBlogFailure,
} from "../slices/ViewBlogSlice";
const API_URL = import.meta.env.VITE_API_URL;
import axios from "axios";
function* fetchBlogbyId(action) {
  try {
    const blog_id = action.payload;
    yield put(fetchBlogReq());
    const res = yield call(axios.get, `${API_URL}/blog/getBlogById`, {
      params: {
        blog_id,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("auth_token"),
      },
    });
    yield put(fetchBlogSuccessfull(res.data.data));
  } catch (e) {
    yield put(fetchBlogFailure(404));
  }
}

// watcher saga which for action type and launch particular workersaga for that action type
function* ViewBlogSaga() {
  yield takeEvery("ViewBlog/fetchBlog", fetchBlogbyId);
}

export default ViewBlogSaga;
