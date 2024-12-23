import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import logo from "./uniLogo.svg";

export default function Navbar({ isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dummy user data for testing
  const user = false;

  const Logo = { logo }; // Placeholder logo

  // Normal state style
  const sstyle = {
    position: "fixed",
    top: 0,
    left: "50%", // Center horizontally
    transform: "translateX(-50%)", // Adjust for centering
    width: "50%", // Normal width
    padding: "10px 20px",
    backgroundColor: "white",
    color: "black",
    borderRadius: "14px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
    margin: "10px",
  };

  // Reduced (scrolled) state style
  const norm = {
    position: "fixed",
    top: 0,
    left: 0,
    transform: "none",
    width: "100%",
    padding: "10px 20px",
    backgroundColor: "white",
    color: "black",
    borderRadius: "0",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  };

  return (
    <div
      className="flex justify-around items-center overflow-x-hidden fixed z-50 h-16 w-full mx-auto"
      style={isScrolled ? sstyle : norm} // Dynamically switch styles
    >
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="lg:h-10 h-6" width="80%" />
      </div>

      {/* Navigation Links (Responsive) */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-white shadow-lg rounded-r-lg transform transition-transform duration-500 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:block md:w-auto md:translate-x-0 md:rounded-none md:shadow-none`}
      >
        <div className="flex flex-col md:flex-row md:gap-8 p-6 md:p-0 h-full">
          <NavLink to="/" text="Home" setIsMenuOpen={setIsMenuOpen} />
          {user ? (
            <NavLink
              to="/profile"
              text="Profile"
              setIsMenuOpen={setIsMenuOpen}
            />
          ) : null}
          <NavLink to="/events" text="Events" setIsMenuOpen={setIsMenuOpen} />
          <NavLink to="/gallery" text="Gallery" setIsMenuOpen={setIsMenuOpen} />
          <NavLink to="/support" text="Support" setIsMenuOpen={setIsMenuOpen} />
          {!user && (
            <div className="flex flex-col gap-4 mt-6 md:hidden">
              <button className="text-xs py-2 px-4 bg-black text-white rounded-md">
                Register
              </button>
              <button className="text-xs py-2 px-4 bg-gray-800 text-white rounded-md">
                Sign In
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Cart and Profile Section */}
      <div className="flex items-center gap-4 md:gap-4 z-40">
        {user ? (
          <div className="flex items-center gap-4">
            <a to={"/cart"} className="relative">
              <FaShoppingCart className="h-6 w-6 text-gray-700 cursor-pointer" />
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {user.cart.length || 0}
              </span>
            </a>
            <img
              src={user.profileImage}
              alt="Profile"
              className="h-8 w-8 rounded-full hidden md:block"
              referrerPolicy="no-referrer"
            />
            <button className="text-xs py-2 px-4 bg-red-500 text-white rounded-md">
              Logout
            </button>
          </div>
        ) : (
          <div className="hidden md:flex md:items-center md:gap-4">
            <button className="text-xs py-2 px-4 bg-black text-white rounded-md">
              Register
            </button>
            <button className="text-xs py-2 px-4 bg-gray-800 text-white rounded-md">
              Sign In
            </button>
          </div>
        )}
        {/* Hamburger Icon */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>
    </div>
  );
}

function NavLink({ to, text, setIsMenuOpen }) {
  return (
    <a
      to={to}
      className="text-sm font-medium text-gray-800 rounded-xl p-2 hover:bg-blue-100 transition-colors flex items-center cursor-pointer"
      onClick={() => setIsMenuOpen(false)}
    >
      {text}
    </a>
  );
}
