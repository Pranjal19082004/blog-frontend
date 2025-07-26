

import React, { useState } from "react";
import Layout from "../components/Layout";

const AddBlogPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handlePost = () => {
    // Here you can add your logic to post the blog (e.g., API call)
    console.log("Blog posted:", { title, content, imagePreview });
    // Reset form after posting
    setTitle("");
    setContent("");
    setImagePreview("");
  };

  const handleCancel = () => {
    setTitle("");
    setContent("");
    setImagePreview("");
  };

  return (
    <Layout>
      <div className="min-h-screen p-8 bg-gray-100 flex flex-col lg:flex-row gap-8">
        {/* Left Side - Live Preview */}
        <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Live Preview</h2>
          <div className="border p-4 rounded-lg">
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Blog Preview"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            )}
            <h1 className="text-3xl font-bold mb-4">{title || "Blog Title"}</h1>
            <p className="text-gray-700 leading-relaxed">
              {content || "Start writing your blog content..."}
            </p>
          </div>
        </div>

        {/* Right Side - Blog Form */}
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Add Blog Post</h2>
          <form className="space-y-4">
            {/* Title Input */}
            <div>
              <label className="block text-lg font-semibold mb-2">Title</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Content Input */}
            <div>
              <label className="block text-lg font-semibold mb-2">
                Content
              </label>
              <textarea
                rows="8"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter blog content"
                value={content}
                onChange={(e) => {
                  console.log(e)
                  console.log(e.target.value)
                  setContent(e.target.value);
                }}
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-lg font-semibold mb-2">Image</label>
              <input
                type="file"
                className="w-full p-2 border rounded-lg"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
          </form>

          {/* Bottom Buttons */}
          <div className="mt-6 flex justify-between">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              onClick={handlePost}
            >
              Post Blog
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddBlogPost;
