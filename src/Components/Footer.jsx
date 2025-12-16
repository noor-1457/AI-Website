import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-40 space-between">
          {/* Logo / About */}
          <div>
            <h2 className="text-2xl font-bold text-white">Codecelix</h2>
            <p className="mt-3 text-sm leading-relaxed">
              AI-powered solutions to automate, scale, and grow your business.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/CodeCelix"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-lg"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/company/codecelix"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-lg"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/codecelix"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-lg"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/codecelix/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-lg"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-4 text-center text-sm">
          © 2025 Codecelix. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
