import React from "react";
import Header from "../components/Header";

function About() {
  return (
    <>
      <div className="w-5/6 mx-auto">
        <Header />
        <div className="grid place-content-center gap-3">
          <h2 className="text-2xl font-extrabold text-center">
            Welcome to QuikHire
          </h2>
          <p className="text-center text-xl">
            {" "}
            This is a full stack MERN Job-portal Webapp{" "}
          </p>
          <div>FAQ's</div>
        </div>
      </div>
    </>
  );
}

export default About;
