import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="bg-gray-900">
        <header className=" top-0 ">
          <nav className="flex  justify-center p-6 lg:px-8" aria-label="Global">
            {/* Logo */}
            <div className="flex lg:flex-1">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="font-bold text-white text-2xl ">
                  Code Celix
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex lg:gap-x-12 justify-center">
              <Link
                to="/"
                className="text-sm font-semibold text-white hover:text-blue-600"
              >
                Home
              </Link>
              <Link
                to="/"
                className="text-sm font-semibold text-white hover:text-blue-600"
              >
                About us
              </Link>
              <Link
                to="/"
                className="text-sm font-semibold text-white hover:text-blue-600"
              >
                FAQ
              </Link>
              <Link
                to="/"
                className="text-sm font-semibold text-white hover:text-blue-600"
              >
                Company
              </Link>
              <Link
                to="/contact"
                className="text-sm font-semibold text-white hover:text-blue-600"
              >
                Contact Us
              </Link>
              <Link
                to="/pricing"
                className="text-sm font-semibold text-white hover:text-blue-600"
              >
                Pricing
              </Link>
              <Link
                to="/case-studies"
                className="text-sm font-semibold text-white hover:text-blue-600"
              >
                Case Studies
              </Link>
            </div>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-gray-900 bg-opacity-95">
              <div className="flex items-center justify-between p-6">
                <Link to="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Logo"
                    className="h-8 w-auto"
                  />
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-200"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="px-6 pt-2 pb-6 space-y-2">
                <Link
                  to="/"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="#"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About us
                </Link>
                <Link
                  to="#"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  to="#"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Company
                </Link>
                <Link
                  to="/case-studies"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Case Studies
                </Link>
                <Link
                  to="#"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact us
                </Link>
              </div>
            </div>
          )}
        </header>
      </div>
    </>
  );
}
