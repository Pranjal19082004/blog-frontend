import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  reqSearchSuggestion,
  searchSuggestionSuccessfull,
  searchSuggestionFailed,
} from "../../slices/Search/SearchUserSuggestionSlice";
const API_URL = import.meta.env.VITE_API_URL;
import axios from "axios";
function* Search_Suggestion(action) {
  try {
    yield put(reqSearchSuggestion());
    yield delay(400);
    const res = yield call(
      axios.get,
      `${API_URL}/users/search-users-suggestions`,
      {
        params: {
          valueToSearch: action.payload,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("auth_token"),
        },
      }
    );
    yield put(searchSuggestionSuccessfull(res.data.data));
  } catch (e) {
    yield put(searchSuggestionFailed());
  }
}

function* SearchSuggestionSaga() {
  yield takeLatest("SearchSuggestion/searchSuggestion", Search_Suggestion);
}

export default SearchSuggestionSaga;
