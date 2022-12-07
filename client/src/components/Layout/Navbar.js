import React, { useState, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Navbar = ({ isOpen, toggle }) => {
  const navRef = useRef();
  const logout = () => {
    localStorage.removeItem("token");
    setAuth(false);
  };

  const { setAuth, isAuthenticated, userType } = useAuth();
  return (
    <nav ref={navRef} className="bg-gray-800 ">
      <div className="container px-2 mx-auto h-16 flex flex-nowrap justify-between items-center max-w-8xl">
        <button
          onClick={toggle}
          type="button"
          className="inline-flex items-center p-2 text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 text-gray-200 focus:ring-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <h1 className="text-red-600 cursor-pointer font-bold text-xl ml-auto lg:ml-0">
          <a href="/">MUSCLE GYM</a>
        </h1>
        <div className="hidden lg:ml-32 z-50 lg:block lg:self-stretch">
          <div className="h-full flex space-x-8">
            <a
              href="/"
              className="flex items-center text-md font-medium text-gray-200 hover:text-red-600"
            >
              Home
            </a>

            <h1 className="flex items-center text-md cursor-pointer font-medium text-gray-200 hover:text-red-600">
              <Link to="locations" spy={true} smooth={true} duration={500}>
                Locations
              </Link>
            </h1>

            <h1 className="flex items-center cursor-pointer text-md font-medium text-gray-200 hover:text-red-600">
              <Link to="memberships" spy={true} smooth={true} duration={500}>
                Memberships
              </Link>
            </h1>
            {isAuthenticated && userType == "member" && (
              <a
                href="/dashboard"
                className="flex items-center text-md font-medium text-gray-200 hover:text-red-600"
              >
                Dashboard
              </a>
            )}
            {isAuthenticated && userType == "employee" && (
              <a
                href="/admin"
                className="flex items-center text-md font-medium text-gray-200 hover:text-red-600"
              >
                Admin Dashboard
              </a>
            )}
          </div>
        </div>
        <div className="ml-auto flex items-center">
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
            {!isAuthenticated ? (
              <>
                <a
                  href="/login"
                  className="text-sm font-medium text-gray-200 hover:text-red-600"
                >
                  Log In
                </a>

                <div className="rounded-md shadow">
                  <a
                    href="/register"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-3 py-1 text-sm  text-white hover:bg-red-700 "
                  >
                    Sign Up
                  </a>
                </div>
              </>
            ) : (
              <div className="rounded-md shadow">
                <button
                  onClick={logout}
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-3 py-1 text-sm  text-white hover:bg-red-700 "
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
