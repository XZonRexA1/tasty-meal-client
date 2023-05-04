import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="bg-orange-700 text-white p-4 rounded md:flex justify-between m-4 text-left md:items-center">
      <h3 className="font-semibold text-3xl font-mono">TastyMeal</h3>
      <nav className="flex items-center space-x-4 font-mono">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        {user && (
          <img
            className=" w-8 h-8 "
            title={user.displayName}
            src={user.photoURL}
            alt="user image"
          />
        )}
        {user ? (
          <button onClick={handleLogOut}>Logout</button>
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
