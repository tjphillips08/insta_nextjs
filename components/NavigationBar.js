import React from "react";
import Link from "next/link";
import Image from "next/image";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useRouter } from "next/router";

const NavigationBar = () => {
  const router = useRouter();
  const isCurrentPath = (path) => router.pathname === path;
  return (
    <nav className="flex justify-between bg-teal-500 p-6">
      <div className="flex items-center text-white mr-6">
        <Link className="font-semibold text-xl tracking-tight ml-2" href="/">
          InstaCats
        </Link>
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon
          className="text-slate-600 text-6xl pr-2 "
          icon={faCat}
        />
      </div>

      <div className="flex lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ${
              isCurrentPath("/upload") ? "text-white font-bold" : ""
            }`}
            href="/upload"
          >
            Upload Photo
          </Link>
          <Link
            className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ${
              isCurrentPath("/login") ? "text-white font-bold" : ""
            }`}
            href="/login"
          >
            Login
          </Link>
          <Link
            className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ${
              isCurrentPath("/register") ? "text-white font-bold" : ""
            }`}
            href="/register"
          >
            Register
          </Link>
        </div>
        <div className="lg:hidden flex items-center">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;