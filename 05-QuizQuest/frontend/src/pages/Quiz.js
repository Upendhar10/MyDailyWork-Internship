import React from "react";
import Navbar from "../components/Navbar";
import QuizList from "../components/QuizList";
import { Btns } from "../components/QuizList";

function Quiz() {
  return (
    <div className=" mx-auto w-5/6 h-screen">
      <Navbar />
      <h1 className="font-bold text-4xl text-center">
        Welcome back ! username
      </h1>
      <div className="flex justify-around items-center my-10 flex-wrap">
        <QuizList />
        <Btns />
      </div>
    </div>
  );
}

export default Quiz;
