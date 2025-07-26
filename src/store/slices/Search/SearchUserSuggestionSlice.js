import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export const SearchSuggestionSlice = createSlice({
  name: "SearchSuggestion",
  initialState,
  reducers: {
    reqSearchSuggestion: (state) => {
      state.loading = true;
    },
    searchSuggestion: (state, action) => {},
    searchSuggestionSuccessfull: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    searchSuggestionFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    removeSearchSuggestion:(state)=>{
      state.data=[];
      state.loading=false;
      state.error=null
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  reqSearchSuggestion,
  searchSuggestion,
  searchSuggestionSuccessfull,
  searchSuggestionFailed,
  removeSearchSuggestion,
} = SearchSuggestionSlice.actions;

export default SearchSuggestionSlice.reducer;
