import { all } from "redux-saga/effects";
import userSaga from "./userSaga.jsx";
import postBlogSaga from "./blogPostSaga.js";
import ProfileSaga from "./ProfileSaga.js";
import SearchSaga from "./Search/SearchSaga.js";
import SearchSuggestionSaga from "./Search/SearchSuggestionSaga.js";
import ViewBlogSaga from "./viewBlogSaga.js";
function* rootSaga() {
  yield all([
    userSaga(),
    postBlogSaga(),
    ProfileSaga(),
    SearchSaga(),
    SearchSuggestionSaga(),
    ViewBlogSaga(),
  ]);
}

export default rootSaga;
