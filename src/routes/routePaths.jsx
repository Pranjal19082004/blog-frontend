import { lazy } from "react";
import { Navigate } from "react-router-dom";
const SignUpForm = lazy(() => import("../pages/SignupForm"));
const LoginForm = lazy(()=>import("../pages/signIn"))
const BlogPostForm = lazy (()=>import("../pages/BlogPostForm"));
const BlogPostView = lazy(()=>import("../pages/ViewBlogs"))
const UserSearch = lazy(()=>import("./../pages/SearchUser"))
const ProfilePage = lazy(()=>import("./../pages/Profile"))
const SearchUSerProfile = lazy(()=>import("./../pages/SearchUserProfile"))
const routes = [
  {
    path: "/signUp",
    element: <SignUpForm />,
  },

  {
    path: "/signIn",
    element: <LoginForm />,
  },
  {
    path: "/post-blog",
    element: <BlogPostForm />,
  },
  {
    path: "/view-blog/:blog_id",
    element: <BlogPostView />,
  },
  {
    path: "/Profile-user/:username",
    element: <SearchUSerProfile />,
  },
  {
    path: "/search-user",
    element: <UserSearch />,
  },
  {
    path: "/Profile",
    element: <ProfilePage />,
  },
];
export { routes };