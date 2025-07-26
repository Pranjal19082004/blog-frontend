import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  reqSearchUser,
  SearchUser,
  SearchUserSuccessfull,
  SearchUserFailed,
} from "../../slices/Search/SearchUserSlice";
const API_URL = import.meta.env.VITE_API_URL;
import axios from "axios";
function* Search_User(action) {
  const username= action.payload;
  console.log(username)
  try {
    yield put(reqSearchUser());
    const res = yield call(axios.get, `${API_URL}/users/search-User`, {
      params:{
        username
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("auth_token"),
      },
    });
    yield put(SearchUserSuccessfull(res.data.data));
  } catch (e) {
    yield put(SearchUserFailed());
  }
}

function* SearchSaga() {
  yield takeEvery("Search/SearchUser", Search_User);
}

export default SearchSaga;
