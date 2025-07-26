import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  reqProfileInfo,
  fetchProfileSuccessfull,
  fetchProfileFailed,
} from "../slices/ProfileSlice";
const API_URL = import.meta.env.VITE_API_URL;
import axios from "axios";
function* fetchProfile(action) {
  try {
    yield put(reqProfileInfo());
    const res = yield call(axios.get, `${API_URL}/users/profile`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("auth_token"),
      },
    });
    console.log(res)
    yield put(fetchProfileSuccessfull(res.data.data));
  } catch (e) {
    yield put(fetchProfileFailed());
  }
}

// watcher saga which for action type and launch particular workersaga for that action type
function* ProfileSaga() {
  yield takeEvery("Profile/getProfile", fetchProfile);
}

export default ProfileSaga;
