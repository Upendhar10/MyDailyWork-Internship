import React from "react";
import { Logo } from "../components/Navbar";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <div className="grid place-content-center h-screen gap-6 bg-[#c8d6e5] w-full flex-wrap p-4">
        {/* <Logo /> */}
        <Navbar />
        <h1 className="text-3xl font-extrabold">Welcome to QuizzQuest</h1>
        <p> This is a full stack MERN Quizz Webapp </p>
        <h2 className="text-2xl font-extrabold"> Rules :</h2>
        <ol className=" list-inside list-decimal leading-loose text-xl flex flex-col flex-wrap">
          <li>You will be asked 10 questions one after another.</li>
          <li>10 points is awarded for the correct answer.</li>
          <li>
            Each question has three options. You can choose only one options.
          </li>
          <li>You can review and change answers before the quiz finish.</li>
          <li>The result will be declared at the end of the quiz.</li>
        </ol>
      </div>
    </>
  );
}

export default About;
