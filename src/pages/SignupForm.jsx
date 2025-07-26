import React, { useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    name: "",
    DOB: "",
    password: "",
    ProfileImage: null,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      ProfileImage: file,
    });

    // Preview the selected image
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Form validation function
  const validateForm = () => {
    const { username, email, name, DOB, password, ProfileImage } = formData;
    let formErrors = {};
    let isValid = true;

    if (!username) {
      isValid = false;
      formErrors.username = "Username is required";
    }

    if (!email) {
      isValid = false;
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      formErrors.email = "Email is invalid";
    }

    if (!name) {
      isValid = false;
      formErrors.name = "Name is required";
    }

    if (!DOB) {
      isValid = false;
      formErrors.DOB = "Date of Birth is required";
    }

    if (!password) {
      isValid = false;
      formErrors.password = "Password is required";
    } else if (password.length < 6) {
      isValid = false;
      formErrors.password = "Password must be at least 6 characters";
    }

    if (!ProfileImage) {
      isValid = false;
      formErrors.ProfileImage = "Profile image is required";
    }

    setErrors(formErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      let data = new FormData;
      for(let key in formData){
        data.append(`${key}`,formData[`${key}`])
      }
      axios.post(`${API_URL}/users/register`, data);
      alert("Form submitted successfully!");
      // Here you can send formData to a backend server or API.
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Signup Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Username Field */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.username ? "border-red-500" : "border-gray-300"} rounded`}
            placeholder="Enter your username"
          />
          {errors.username && (
            <p className="text-red-500 text-xs mt-1">{errors.username}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* DOB Field */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1" htmlFor="DOB">
            Date of Birth
          </label>
          <input
            type="date"
            id="DOB"
            name="DOB"
            value={formData.DOB}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.DOB ? "border-red-500" : "border-gray-300"} rounded`}
          />
          {errors.DOB && (
            <p className="text-red-500 text-xs mt-1">{errors.DOB}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded`}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        {/* Profile Image Upload */}
        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-1"
            htmlFor="ProfileImage"
          >
            Profile Image
          </label>
          <input
            type="file"
            id="ProfileImage"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {previewImage && (
            <img
              src={previewImage}
              alt="Profile Preview"
              className="mt-2 h-24 w-24 object-cover rounded-full"
            />
          )}
          {errors.ProfileImage && (
            <p className="text-red-500 text-xs mt-1">{errors.ProfileImage}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
