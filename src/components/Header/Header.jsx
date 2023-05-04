import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="bg-orange-700 text-white p-4 rounded md:flex justify-between m-4 text-left md:items-center">
      <Link to="/"><h3 className="font-semibold text-3xl font-mono">TastyMeal</h3></Link>
      <nav className="flex items-center space-x-4 font-mono">
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/blog">Blog</ActiveLink>
        {user && (
          <img
            className=" w-8 h-8 rounded-full"
            title={user?.displayName ? user?.displayName : user.email}
            src={user?.photoURL}
           
          />
        )}
        {user ? (
          <button onClick={handleLogOut}>Logout</button>
        ) : (
          <ActiveLink to="/login">
            <button>Login</button>
          </ActiveLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
