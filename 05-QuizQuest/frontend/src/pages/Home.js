import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="w-[90%] my-5 mx-auto">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Home;
