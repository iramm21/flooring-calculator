"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isAuthenticated, logout, setAuthState } = useAuth();

  // Check if user is authenticated on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setAuthState(JSON.parse(storedUser)); // Update context state with stored user data
    }
  }, [setAuthState]);

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          <Link href="/">MySite</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-300">
            Services
          </Link>

          {/* Conditional Auth Links */}
          {!isAuthenticated ? (
            <>
              <Link href="/login" className="hover:text-gray-300">
                Login
              </Link>
              <Link href="/register" className="hover:text-gray-300">
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                href={`/profile/${user?.id}`}
                className="hover:text-gray-300"
              >
                {user?.name}&apos;s Profile
              </Link>
              <button onClick={logout} className="hover:text-gray-300">
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <Link href="/" className="block px-4 py-2">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2">
            About
          </Link>
          <Link href="/services" className="block px-4 py-2">
            Services
          </Link>

          {/* Conditional Auth Links for Mobile */}
          {!isAuthenticated ? (
            <>
              <Link href="/login" className="block px-4 py-2">
                Login
              </Link>
              <Link href="/signup" className="block px-4 py-2">
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link href={`/profile/${user?.id}`} className="block px-4 py-2">
                {user?.name}&apos;s Profile
              </Link>
              <button onClick={logout} className="block px-4 py-2">
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
