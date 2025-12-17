import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Menu items for both desktop and mobile
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Company", path: "/company" },
    { name: "Industries", path: "/industries" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="bg-gray-900">
      <nav className="flex justify-between items-center p-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          Code Celix
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm font-semibold text-white hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-gray-200 p-2.5 rounded-md"
          >
            <span className="sr-only">Open menu</span>
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
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-95 lg:hidden">
          <div className="flex items-center justify-between p-6">
            <Link to="/" className="text-2xl font-bold text-white">
              Code Celix
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-200 p-2.5 rounded-md"
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

          <div className="px-6 pb-6 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
