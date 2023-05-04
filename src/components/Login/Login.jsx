import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { singIn } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();

    //    all form data
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    singIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
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
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
              <div className="m-2">Or</div>
              <div className="flex mt-4 md:mt-0">
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mr-2"
                >
                  Google
                </button>
                <button
                  type="button"
                  className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                >
                  Github
                </button>
              </div>
            </div>

            <div>
              Don't Have an Account?{" "}
              <Link className="text-blue-500" to="/register">
                Register
              </Link>
            </div>
            <div>{error}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
