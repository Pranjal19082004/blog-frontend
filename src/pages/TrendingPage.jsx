import React, { useState } from "react";
import Layout from "../components/Layout";

// Sample Data for categories and trending posts
const categories = ["All", "Technology", "Sports", "Fashion", "Music", "Art"];

const trendingPostsData = [
  {
    id: 1,
    title: "AI is Revolutionizing Tech",
    content: "Artificial Intelligence is making waves in the tech industry...",
    category: "Technology",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "The Future of Sports",
    content:
      "With emerging technologies, the way we play sports is changing...",
    category: "Sports",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Latest Fashion Trends",
    content: "Fashion has evolved over the years, and 2024 is no exception...",
    category: "Fashion",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Music of the Decade",
    content: "The music industry has seen various genres rise to fame...",
    category: "Music",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Art in the Modern Age",
    content: "Contemporary art reflects the spirit of innovation and change...",
    category: "Art",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    title: "New Gadgets in 2024",
    content:
      "Technology keeps evolving, and 2024 has introduced new exciting gadgets...",
    category: "Technology",
    image: "https://via.placeholder.com/150",
  },
];

const TrendingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter posts based on the selected category
  const filteredPosts =
    selectedCategory === "All"
      ? trendingPostsData
      : trendingPostsData.filter((post) => post.category === selectedCategory);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-8">
        {/* Categories Section */}
        <div className="w-full mb-8">
          <h2 className="text-2xl font-semibold mb-4">Trending Categories</h2>
          <div className="flex space-x-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-white text-black"
                } hover:bg-purple-500 transition`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Trending Posts Section */}
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-4">
            Trending Posts in {selectedCategory}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-y-auto">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white p-4 rounded-lg shadow-lg flex flex-col"
                >
                  {/* Post Image */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  {/* Post Title */}
                  <h3 className="text-lg font-bold">{post.title}</h3>
                  {/* Post Content */}
                  <p className="text-gray-600 mt-2">
                    {post.content.length > 100
                      ? post.content.substring(0, 100) + "..."
                      : post.content}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-center col-span-3">
                <p>No posts found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TrendingPage;
