import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBlog } from "../store/slices/ViewBlogSlice";
// Sample data for a single blog and suggested blogs
// const blogData = {
//   title: "How AI is Shaping the Future",
//   content: `Artificial Intelligence (AI) is one of the most transformative technologies of the 21st century. From healthcare to finance, AI is being used to solve problems that were previously thought impossible to tackle. In this blog, we explore the ways AI is shaping our future, and what it means for different industries. We will also look at some of the ethical challenges posed by AI, and what we can do to ensure it is used for good.`,
//   image: "https://via.placeholder.com/300",
// };
// const blog = useSelector(state=>state.viewBlog)

const suggestedBlogsData = [
  {
    id: 1,
    title: "The Future of Machine Learning",
    content: "Machine learning is a rapidly evolving field...",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Tech Innovations of 2024",
    content: "2024 has seen major tech innovations in AI, IoT, and more...",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Ethics in AI",
    content:
      "With AI becoming more powerful, ethical considerations are more important than ever...",
    image: "https://via.placeholder.com/150",
  },
];

const ViewBlogPage = () => {
  const dispatch = useDispatch();

  const blogData = useSelector((state) => state.ViewBlog.data);
  const { blog_id } = useParams();
  useEffect(() => {
    dispatch(fetchBlog(blog_id));
  },[blog_id]);

  return (
    <Layout>
      <div className="min-h-screen p-8 bg-gray-100 flex flex-col lg:flex-row gap-8">
        {/* Left Side - Full Blog */}
        <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
          <img
            src={blogData.Images?.[0]}
            alt={blogData.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h1 className="text-3xl font-bold mb-4">{blogData.title}</h1>
          <p className="text-gray-700 leading-relaxed">{blogData.content}</p>
        </div>

        {/* Right Side - Suggested Blogs */}
        <div className="w-full lg:w-1/3 flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Suggested Blogs</h2>
          {suggestedBlogsData.map((blog) => (
            <div
              key={blog.id}
              className="flex bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Thumbnail Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-24 h-24 object-cover"
              />
              {/* Blog Title and Content */}
              <div className="p-4 flex flex-col justify-between">
                <h3 className="text-lg font-bold">{blog.title}</h3>
                <p className="text-gray-600">
                  {blog.content.length > 50
                    ? blog.content.substring(0, 50) + "..."
                    : blog.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ViewBlogPage;
