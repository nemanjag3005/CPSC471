import React, { useState } from "react";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div
      className={`h-full w-4/5 bg-gray-200 z-50 fixed top-0 left-0 shadow-xl overflow-y-scroll ${
        isOpen == true ? "block" : "hidden"
      }`}
    >
      <nav className="px-4 py-4">
        <div className="container flex flex-wrap justify-between items-center mx-auto max-w-6xl">
          <h1 className="text-purple-600 font-bold text-xl ">MUSCLE GYM</h1>
          <button
            type="button"
            onClick={toggle}
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>

      <div className="border-t border-gray-400 py-6 px-4 space-y-6">
        <div className="flow-root">
          <a href="/" className="-m-2 p-2 block font-medium text-gray-900">
            Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
