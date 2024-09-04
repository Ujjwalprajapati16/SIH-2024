import React from "react";

const Navbar = () => {
  return (
    <header className="bg-blue-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Disaster Info Hub</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              News
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Social Media
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
