import React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              Advocate Seema Vashishta
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2">
                Home
              </Link>
              <Link
                to="/practice-areas"
                className="text-gray-300 hover:text-white px-3 py-2"
              >
                Practice Areas
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white px-3 py-2"
              >
                About
              </Link>
              <Link
                to="/case-results"
                className="text-gray-300 hover:text-white px-3 py-2"
              >
                Case Results
              </Link>
              <Link
                to="/resources"
                className="text-gray-300 hover:text-white px-3 py-2"
              >
                Resources
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white px-3 py-2"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-300 hover:text-white block px-3 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/practice-areas"
              className="text-gray-300 hover:text-white block px-3 py-2"
              onClick={() => setIsOpen(false)}
            >
              Practice Areas
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white block px-3 py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/case-results"
              className="text-gray-300 hover:text-white block px-3 py-2"
              onClick={() => setIsOpen(false)}
            >
              Case Results
            </Link>
            <Link
              to="/resources"
              className="text-gray-300 hover:text-white block px-3 py-2"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white block px-3 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
