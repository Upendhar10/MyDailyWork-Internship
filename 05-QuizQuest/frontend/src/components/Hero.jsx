import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex items-center justify-between gap-12 h-[80vh] flex-wrap sm:flex-nowrap">
      <div className="flex items-center flex-col sm:items-start">
        <p className="text-4xl  md:text-5xl font-extrabold leading-relaxed md:leading-relaxed tracking-wider mt-10 text-center sm:text-start">
          Become a <span className="text-slate-500">Quiz Pro </span> by Engaging
          Minds, Elevating Your Curiosity, and Unleashing Your Inner Genius!
        </p>
        <Link to="/login">
          <button className="py-2 px-5 bg-slate-400 text-xl rounded font-semibold mt-10 text-white hover:bg-slate-700">
            Get Started
          </button>
        </Link>
      </div>
      <img
        src="https://img.freepik.com/free-vector/flat-illustration-people-shrugging_23-2149330615.jpg"
        alt="Hero"
        className="object-center object-cover"
      />
    </div>
  );
}

export default Hero;
