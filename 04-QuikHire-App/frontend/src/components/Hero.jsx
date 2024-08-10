import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex items-center md:justify-between justify-center gap-12 h-[85vh] flex-wrap md:flex-nowrap">
      <div className="min-w-[40%] w-5/6 flex flex-col justify-center sm:items-start gap-5 h-[90%]">
        <p className="text-4xl md:text-5xl md:tracking-wider font-extrabold  text-center sm:text-start uppercase">
          Your <span className="text-[#9980FA]">Dream Job,</span> Just a Click
          Away!
        </p>
        <p className="text-2xl font-semibold leading-relaxed tracking-wide mt-3 text-center sm:text-start">
          Connect with top companies and discover your next career move. Find
          the perfect job that matches your skills and aspirations.
        </p>
        <Link to="/login" className="flex gap-5">
          <button className="py-2 px-5 bg-[#9980FA] text-xl rounded font-semibold mt-10 text-white hover:bg-purple-400">
            Explore Jobs
          </button>
          <button className="py-2 px-5 bg-[#9980FA] text-xl rounded font-semibold mt-10 text-white hover:bg-purple-400">
            Post a Job
          </button>
        </Link>
      </div>
      <img
        src="https://img.freepik.com/free-vector/choice-worker-concept_23-2148626348.jpg?semt=ais_hybrid"
        alt="Hero"
        className="object-center object-cover min-w-[475px] w-[75vw]"
      />
    </div>
  );
}

export default Hero;
