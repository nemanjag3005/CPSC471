import React, { useState, useRef } from "react";

const Navbar = ({ isOpen, toggle }) => {
  const navRef = useRef();

  return (
    <nav ref={navRef} className="bg-gray-800 ">
      <div className="container px-2 mx-auto h-16 flex flex-nowrap justify-between items-center max-w-8xl border-b border-gray-600">
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
          MUSCLE GYM
        </h1>
        <div className="hidden lg:ml-32 z-50 lg:block lg:self-stretch">
          <div className="h-full flex space-x-8">
            <a
              href="/"
              className="flex items-center text-sm font-medium text-gray-200 hover:text-red-600"
            >
              Home
            </a>
            <a
              href="/"
              className="flex items-center text-sm font-medium text-gray-200 hover:text-red-600"
            >
              Locations
            </a>
            <a
              href="/"
              className="flex items-center text-sm font-medium text-gray-200 hover:text-red-600"
            >
              Memberships
            </a>
          </div>
        </div>
        <div className="ml-auto flex items-center">
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
            <a
              href="/login"
              className="text-sm font-medium text-gray-200 hover:text-red-600"
            >
              Sign In
            </a>
            <span className="h-6 w-px bg-gray-600" aria-hidden="true" />
            <a
              href="/registration"
              className="text-sm font-medium text-gray-200 hover:text-red-600"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
