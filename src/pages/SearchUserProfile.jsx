import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { SearchUser } from "../store/slices/Search/SearchUserSlice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const SearchUSerProfile = () => {
  const { username } = useParams();
  console.log(useParams());
  //   const [username,setUsername]=useState(useParams())
  const dispatch = useDispatch();
  const blogPosts = useSelector((state) => state.SearchUser.data.Blogs);
  const user = useSelector((state) => state.SearchUser.data);
  useEffect(() => {
    dispatch(SearchUser(username));
  }, [username]);
  useEffect(() => console.log(blogPosts));
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row h-screen p-6 bg-gray-100">
        <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-6 mb-6 lg:mb-0">
          <div className="flex flex-col items-center">
            <img
              src={user?.ProfileImage}
              alt="Profile"
              className="rounded-full w-[150px] h-[150px] object-cover mb-4"
            />
            {/* Name */}
            <h1 className="text-2xl font-bold text-gray-800">{`${user?.name}`}</h1>
            {/* Profile Details */}{" "}
            <p className="text-gray-600 mt-1">{`@${user?.username}`}</p>
            <p className="text-gray-600 mt-2">Software Engineer | Blogger</p>
          </div>
        </div>

        {/* Right Section - Recent Blogs */}
        <div className="w-full lg:w-2/3 lg:ml-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Recent Blogs
          </h2>

          {/* Blog Post List (Scrollable Section) */}
          <div className="space-y-4 max-h-[50vh] lg:max-h-[75vh] overflow-y-scroll pr-4">
            {blogPosts?.map((post) => (
              <div
                key={post?._id}
                className="flex bg-white shadow-lg rounded-lg p-4 items-start"
              >
                <Link to={`/view-blog/${post?._id}`}>
                  {/* Blog Thumbnail */}
                  <img
                    src={post?.Images[0]}
                    alt={post?.title}
                    className="w-[100px] h-[100px] object-cover mr-4 rounded-lg"
                  />

                  {/* Blog Title and Content */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-gray-800">
                      {post?.title}
                    </h3>
                    <p className="text-gray-600">
                      {post?.content?.length > 80
                        ? `${post?.content.substring(0, 80)}...`
                        : post?.content}
                      {/* Show a snippet of the content */}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchUSerProfile;
