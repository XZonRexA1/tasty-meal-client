import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const { user, createUser } = useContext(AuthContext);

  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    // error

    setError("");
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="min-h-screen mx-4 rounded bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Register</h2>
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
                Register
              </button>
            </div>
            <div>
              Already Have an Account?{" "}
              <Link className="text-blue-500" to="/Login">
                Login
              </Link>
            </div>
            <div style={{color: 'red'}}>{error}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
