import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [error, setError] = useState(null);
    const handleSubmit = () => {

    }
  return (
    <div>
      <div className="min-h-screen mx-4 rounded bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-left text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="name"
                id="name"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
                name="name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-left text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                name="email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-left text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                name="password"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="photo"
                className="block text-left text-gray-700 font-bold mb-2"
              >
                Photo
              </label>
              <input
                type="text"
                id="photo"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your photo URL"
                name="photo"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
            <div>
              Already Have an Account?{" "}
              <Link className="text-blue-500" to="/Login">
                Login
              </Link>
            </div>
            <div>{error}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
