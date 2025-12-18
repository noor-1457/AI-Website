import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBolt,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    products: [
      { label: "AI Automation", to: "/" },
      { label: "Workflow Builder", to: "/" },
      { label: "AI Chatbots", to: "/" },
      { label: "API Integration", to: "/" },
      { label: "Analytics Dashboard", to: "/" },
    ],
    solutions: [
      { label: "E-commerce", to: "/industries" },
      { label: "Healthcare", to: "/industries" },
      { label: "Education", to: "/industries" },
      { label: "Real Estate", to: "/industries" },
      { label: "Small Business", to: "/industries" },
    ],
    resources: [
      { label: "Case Studies", to: "/case-studies" },
      { label: "Documentation", to: "/" },
      { label: "Blog & Articles", to: "/" },
      { label: "Webinars", to: "/" },
      { label: "Help Center", to: "/" },
    ],
    company: [
      { label: "About Us", to: "/" },
      { label: "Careers", to: "/" },
      { label: "Contact", to: "/contact" },
      { label: "Partners", to: "/" },
      { label: "Press Kit", to: "/" },
    ],
    legal: [
      { label: "Privacy Policy", to: "/" },
      { label: "Terms of Service", to: "/" },
      { label: "Cookie Policy", to: "/" },
      { label: "GDPR Compliance", to: "/" },
      { label: "Security", to: "/" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">Codecelix</h2>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              AI-powered solutions to automate, scale, and grow your business. 
              Transform your operations with intelligent automation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <FaEnvelope className="w-5 h-5 text-indigo-400" />
                <a href="mailto:contact@codecelix.com" className="hover:text-white text-base transition">
                  contact@codecelix.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <FaPhone className="w-5 h-5 text-indigo-400" />
                <a href="tel:+1234567890" className="hover:text-white transition text-base ">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <FaMapMarkerAlt className="w-5 h-5 text-indigo-400" />
                <span className="text-base ">Remote · Global</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-3 text-base">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/CodeCelix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 rounded-lg border border-gray-700 bg-gray-800/50 flex items-center justify-center hover:border-indigo-500 hover:bg-indigo-500/10 hover:text-white transition"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-7 h-7" />
                </a>
                <a
                  href="https://twitter.com/codecelix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 rounded-lg border border-gray-700 bg-gray-800/50 flex items-center justify-center hover:border-indigo-500 hover:bg-indigo-500/10 hover:text-white transition"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-7 h-7" />
                </a>
                <a
                  href="https://www.linkedin.com/company/codecelix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 rounded-lg border border-gray-700 bg-gray-800/50 flex items-center justify-center hover:border-indigo-500 hover:bg-indigo-500/10 hover:text-white transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="w-7 h-7" />
                </a>
                <a
                  href="https://www.instagram.com/codecelix/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 rounded-lg border border-gray-700 bg-gray-800/50 flex items-center justify-center hover:border-indigo-500 hover:bg-indigo-500/10 hover:text-white transition"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Solutions
            </h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Stay updated with AI automation insights
                </h3>
                <p className="text-gray-400 text-sm">
                  Get weekly tips, case studies, and automation strategies delivered to your inbox.
                </p>
              </div>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="px-4 py-3 rounded-lg border border-gray-700 bg-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 w-full sm:w-64"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold hover:from-indigo-500 hover:to-indigo-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/30"
                >
                  {subscribed ? (
                    <>
                      <FaCheck className="text-sm" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe
                      <FaArrowRight className="text-sm" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Codecelix. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/" className="text-gray-400 hover:text-indigo-400 transition">
                Privacy
              </Link>
              <Link to="/" className="text-gray-400 hover:text-indigo-400 transition">
                Terms
              </Link>
              <Link to="/" className="text-gray-400 hover:text-indigo-400 transition">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
