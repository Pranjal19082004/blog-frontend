import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  reqSignedIn,
  signIn,
  signInSuccessfull,
  signInFailed,
} from "../slices/userSlices.js";
const API_URL = import.meta.env.VITE_API_URL;
import axios from "axios";
import { redirect } from "react-router-dom";
// working saga to fetch user info after signIn
function* fetchUser(action) {
  try {
    console.log("dispatched action recieved -->", action);
    yield put(reqSignedIn());
    let formData = action.payload;
    console.log("saga formData-->", formData);
    let data = new FormData();
    for (let key in formData) {
      data.append(`${key}`, formData[`${key}`]);
    }
    console.log(data);
    const res = yield call(axios.post, `${API_URL}/users/login`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    localStorage.setItem("auth_token", res.data.data.token);
    yield put(signInSuccessfull(res.data.data.token));
    redirect("/home")
  } catch (e) {
    console.log(e);
    yield put(signInFailed());
  }
}

// watcher saga which for action type and launch particular workersaga for that action type
function* userSaga() {
  yield takeEvery("User/signIn", fetchUser);
}

export default userSaga;
