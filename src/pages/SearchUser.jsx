import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  searchSuggestion,
  removeSearchSuggestion,
} from "../store/slices/Search/SearchUserSuggestionSlice";
import { Link } from "react-router-dom";

const SearchUser = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const suggestions = useSelector((state) => state.SearchSuggestion.data);
  const [show404, setShow404] = useState(false);
  useEffect(() => {
    if (query.trim() != "") {
      dispatch(searchSuggestion(query));
    } else {
      dispatch(removeSearchSuggestion());
    }
  }, [query]);

  const handleInputChange = (e) => {
    if (e.target.value.trim?.() == 0) {
      console.log("ooo");
    }
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    if (suggestions?.length == 0) {
      setShow404(true);
    } else setResult(suggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.name);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="relative w-full max-w-lg mx-auto">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-purple-500"
            placeholder="Search for a user..."
          />
          <button
            onClick={handleSearchClick}
            className="absolute right-2 top-[10%] bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Search
          </button>

          {/* Suggestions Dropdown */}
          {suggestions?.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 max-h-48 overflow-y-auto z-10">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.id}
                  className="p-3 hover:bg-gray-100 cursor-pointer flex items-center"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {/* <img
                  src={suggestion.profilePic}
                  alt={suggestion.name}
                  className="w-8 h-8 rounded-full mr-3"
                /> */}
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Results Section */}
        <div className="mt-8">
          {result?.length > 0 && (
            
              <div>
                <h2 className="text-xl font-semibold mb-4">Search Results:</h2>
                <ul className="space-y-4">
                  {result.map((user) => (
                    <li
                      key={user.id}
                      className="bg-white p-4 rounded-lg shadow-lg flex items-center"
                    >
                      <Link to={`/Profile-user/${user.username}`}>
                      <img
                        src={user.ProfileImage}
                        alt={user.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-bold">{user.name}</h3>
                        <p className="text-gray-500">@{user.username}</p>
                      </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
          )}

          {/* 404 No Users Found */}
          {show404 && (
            <div className="text-center mt-12">
              <h2 className="text-2xl font-bold text-gray-800">404</h2>
              <p className="text-gray-600">No users found.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchUser;
