import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white text-black p-4">
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
        <div className=" bg-white dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className=" ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="bg-white menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
