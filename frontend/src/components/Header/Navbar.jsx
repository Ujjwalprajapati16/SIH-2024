import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white text-black p-4 z-50 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link to="/">Disaster Info Hub</Link>
        </h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/news" className="hover:text-gray-300">
              News
            </Link>
          </li>
          <li>
            <Link to="/social-media" className="hover:text-gray-300">
              Social Media
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
        </ul>
        <div className="bg-white dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="bg-white text-black menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
