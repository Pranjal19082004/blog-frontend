import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useActionData } from "react-router-dom";
import { signOut } from "../store/slices/userSlices";

export default function Header() {
  const [openProfileModal, setOpenProfileModal] = useState(false); // Modal initially closed
  const dispatch = useDispatch();
  const handleProfileClick = () => {
    setOpenProfileModal(!openProfileModal); // Toggle modal open/close state
  };

  return (
    <>
      {/* Header Section */}
      <div
        className="fixed top-0 flex justify-between items-center px-4 w-full h-16"
        style={{ backgroundColor: "#9767b7" }}
      >
        {/* Left Section with Navigation Links */}
        <ul className="flex items-center gap-5">
          <Link to="/post-blog">
            <li className="border-white border-2 px-4 py-2 cursor-pointer hover:bg-purple-400 text-white">
              Post
            </li>
          </Link>
          <Link to="/view-blog">
            <li className="border-white border-2 px-4 py-2 cursor-pointer hover:bg-purple-400 text-white">
              View Post
            </li>
          </Link>
          <li className="flex items-center gap-2">
            {/* Search Bar next to Search Button */}

            <Link to="/search-user">
              <div className="border-white border-2 px-4 py-2 cursor-pointer hover:bg-purple-400 text-white">
                Search
              </div>
            </Link>
          </li>
        </ul>

        {/* Right Section with Profile Image and Name */}
        <div className="flex items-center">
          <div className="mr-4">
            <h1 className="font-bold text-white">Pranjal Chabra</h1>
          </div>
          <img
            src="profile.jpeg"
            className="rounded-full w-[50px] h-[50px] object-cover border border-white cursor-pointer"
            alt="Profile"
            onClick={handleProfileClick} // Toggle modal when clicked
          />
        </div>
      </div>

      {/* Profile Modal */}
      {openProfileModal && (
        <div className="absolute top-[9.5vh] right-2 z-20 max-w-[35vw] min-w-[20vw] bg-white shadow-lg rounded-lg">
          {/* Profile Header Section */}
          <div className="flex gap-4 items-center mb-4 p-5">
            <img
              src="profile.jpeg"
              className="rounded-full w-[50px] h-[50px] object-cover border border-gray-300"
              alt="Profile"
            />
            <div className="flex flex-col">
              <h1 className="font-bold text-black">Pranjal Chabra</h1>
              <h4 className="text-black">Pranjal@chabr0</h4>
            </div>
          </div>

          {/* Followers and Following Info */}
          <div className="flex flex-row mt-1 mb-5 w-full justify-between">
            <div
              className="cursor-pointer px-5 hover:bg-gray-300"
              style={{ color: "black" }}
            >
              <span className="font-bold text-xl">Followers:</span>
              <span className="font-semibold"> 2200</span>
            </div>
            <div
              className="cursor-pointer px-5 hover:bg-gray-300"
              style={{ color: "black" }}
            >
              <span className="font-bold text-xl">Following:</span>
              <span className="font-semibold"> 2200</span>
            </div>
          </div>

          <hr className="my-2 border-gray-300" />

          {/* Profile and Inbox Options */}
          <div className="flex flex-col space-y-2">
            <Link to={"/Profile"}>
              <div
                className="cursor-pointer px-5 py-2 hover:bg-gray-300"
                style={{ color: "black" }}
              >
                Profile
              </div>
            </Link>
            <div
              className="cursor-pointer px-5 py-2 hover:bg-gray-300"
              style={{ color: "black" }}
            >
              Inbox
            </div>
          </div>

          <hr className="my-2 border-gray-300" />

          {/* Sign Out */}
          <div
            className="flex text-red-500 cursor-pointer px-5 py-4 mb-1 hover:bg-red-100"
            onClick={() => {
              dispatch(signOut());
              setOpenProfileModal(false);
            }} // Close modal on sign out
          >
            Sign Out
          </div>
        </div>
      )}
    </>
  );
}
