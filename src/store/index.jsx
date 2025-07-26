import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga";
import SignInReducer from "./slices/userSlices";
import PostBlogSlices from "./slices/BlogPostSlice";
import ProfileSlice from "./slices/ProfileSlice";
import ViewBlogSlice from "./slices/ViewBlogSlice";
import SearchUserSlice from "./slices/Search/SearchUserSlice";
import SearchUserSuggestionSlice from "./slices/Search/SearchUserSuggestionSlice";
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
export const store = configureStore({
  reducer: {
    user: SignInReducer,
    postBlog: PostBlogSlices,
    Profile: ProfileSlice,
    ViewBlog: ViewBlogSlice,
    SearchUser: SearchUserSlice,
    SearchSuggestion: SearchUserSuggestionSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});
sagaMiddleware.run(rootSaga);
