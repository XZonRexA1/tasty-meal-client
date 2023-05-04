import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="bg-orange-700 text-white p-4 rounded md:flex justify-between m-4 text-left md:items-center">
      <h3 className="font-semibold text-3xl font-mono">TastyMeal</h3>
      <nav className="flex space-x-4 font-mono">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <span>
          <img src="../../assets/TastyMealShop.svg" alt="User Profile" />
        </span>
        {user ? (
          <button>Logout</button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
