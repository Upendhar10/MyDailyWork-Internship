import React from "react";

import { Link } from "react-router-dom";

import { assets } from "../assets/assets";

export function Logo() {
  return (
    <a href="/" className="text-4xl font-bold">
      <img
        src={assets.logo}
        alt="QuikHire logo"
        className="h-10 w-10 inline-block ml-1"
      />
      QuikHire
    </a>
  );
}

function NavItems() {
  return (
    <>
      <ul className="flex items-center gap-16 text-xl font-semibold">
        <li className="hover:text-slate-400">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-slate-400">
          <Link to="/about">About</Link>
        </li>
        <li className="px-3 py-2 bg-[#9980FA] rounded-md text-white hover:bg-purple-400">
          <Link to="/login">
            <button>Login</button>
          </Link>
        </li>
        <li className="px-3 py-2 bg-[#9980FA] rounded-md text-white hover:bg-purple-400">
          <Link to="/register">
            <button>Register for free</button>
          </Link>
        </li>
      </ul>
    </>
  );
}

function Header() {
  return (
    <div className="flex justify-between items-center my-6">
      <Logo />
      <NavItems />
    </div>
  );
}
export default Header;
