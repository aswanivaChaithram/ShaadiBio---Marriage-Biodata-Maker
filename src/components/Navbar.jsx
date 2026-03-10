import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({
  setShowLogin,
  setCurrentState,
  isAuthenticated,
  logoutUser,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white shadow-md">
        <div className="max-w-[80%] mx-auto flex items-center justify-between py-4">
          
          {/* Logo */}
          <div className="flex items-center sm:gap-1">
            <img
              src={logo}
              alt="logo"
              className="w-14 h-14 object-contain rounded-full"
            />
            <h2 className="sm:text-2xl text-xl font-bold text-orange-600">
              ShaadiBio
            </h2>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">

            {/* Mobile Menu Icon */}
            {isAuthenticated && location.pathname !== "/" && (
              <button
                className="md:hidden text-2xl text-orange-600 cursor-pointer"
                onClick={() => setMenuOpen(true)}
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            )}

            {/* Login Button */}
            {!isAuthenticated ? (
              <button
                onClick={() => {
                  setCurrentState("Login");
                  setShowLogin(true);
                }}
                className="sm:px-6 px-4 py-2 rounded-full bg-orange-600 text-white font-bold hover:bg-orange-700 transition duration-500 cursor-pointer"
              >
                Login
              </button>
            ) : (
              <>
                {/* Dashboard Button (Desktop) */}
                <button
                  onClick={() => navigate("/dashboard")}
                  className="hidden md:inline-block px-6 py-2 rounded-full bg-orange-600 text-white font-bold hover:bg-orange-700 transition duration-500 cursor-pointer"
                >
                  Dashboard
                </button>

                {/* Logout Button (Desktop) */}
                <button
                  onClick={logoutUser}
                  className="hidden md:inline-block px-6 py-2 rounded-full border border-orange-600 text-orange-600 font-bold hover:bg-orange-100 transition duration-500 cursor-pointer"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isAuthenticated && location.pathname !== "/" && (
        <div
          className={`fixed top-0 right-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            className="absolute top-10 right-14 text-2xl text-orange-600 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            ✖
          </button>

          {/* Mobile Menu Buttons */}
          <button
            onClick={() => {
              navigate("/dashboard");
              setMenuOpen(false);
            }}
            className="px-6 py-2 rounded-full bg-orange-600 text-white font-bold hover:bg-orange-700 transition cursor-pointer"
          >
            Dashboard
          </button>

          <button
            onClick={() => {
              logoutUser();
              setMenuOpen(false);
            }}
            className="px-8 py-2 rounded-full border border-orange-600 text-orange-600 font-bold hover:bg-orange-100 transition cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;