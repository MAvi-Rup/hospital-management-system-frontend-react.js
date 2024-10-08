// src/app/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-color-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="font-bold text-xl">
                Hospital Management System
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="hover:bg-secondary px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:bg-secondary px-3 py-2 rounded-md text-sm font-medium"
              >
                About US
              </Link>
              <Link
                to="/hospitals"
                className="hover:bg-secondary px-3 py-2 rounded-md text-sm font-medium"
              >
                Hospitals
              </Link>
              <Link
                to="/login"
                className="hover:bg-secondary px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-color-white hover:text-color-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="hover:bg-secondary block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:bg-secondary block px-3 py-2 rounded-md text-base font-medium"
            >
              About US
            </Link>
            <Link
              to="/hospitals"
              className="hover:bg-secondary block px-3 py-2 rounded-md text-base font-medium"
            >
              Hospitals
            </Link>
            <Link
              to="/login"
              className="hover:bg-secondary block px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
