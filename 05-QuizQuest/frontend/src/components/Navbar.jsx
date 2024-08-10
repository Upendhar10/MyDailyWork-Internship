import React from "react";

import { Link } from "react-router-dom";

export function Logo() {
  return (
    <a href="/" className="text-3xl font-bold">
      QuizzQuest
    </a>
  );
}

function NavItems() {
  return (
    <>
      <ul className="flex items-center gap-16 text-2xl font-semibold">
        <li className="hover:text-slate-400">
          <Link to="/">Home</Link>
        </li>
        {/* <li className="hover:text-slate-400">
          <Link to="/quiz">Quiz</Link>
        </li> */}
        <li className="hover:text-slate-400">
          <Link to="/about">About</Link>
        </li>
        <li className="px-3 py-1 bg-slate-400 rounded-md text-white hover:bg-slate-700">
          <Link to="/Login">
            <button>Login</button>
          </Link>
        </li>
        <li className="px-3 py-1 bg-slate-400 rounded-md text-white hover:bg-slate-700">
          <Link to="/register">
            <button>Register for free</button>
          </Link>
        </li>
      </ul>
    </>
  );
}

function Navbar() {
  return (
    <div className="flex justify-between items-center my-6">
      <Logo />
      <NavItems />
    </div>
  );
}

export default Navbar;
