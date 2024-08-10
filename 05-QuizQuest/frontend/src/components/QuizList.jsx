import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export function Btns() {
  return (
    <div className="flex items-center justify-center flex-col-reverse gap-6">
      <button className="px-4 py-2 bg-slate-500 rounded text-white text-center hover:bg-slate-700">
        <FontAwesomeIcon icon={faArrowLeft} className="pr-2" />
        back
      </button>
      <Link
        to="/createquiz"
        className="px-4 py-2 bg-slate-500 rounded text-white text-center hover:bg-slate-700"
      >
        <FontAwesomeIcon icon={faPlus} className="pr-2" /> Create New Quiz
      </Link>
    </div>
  );
}

function QuizList() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Available Quizs'</h2>
      <ul className="text-xl p-5 flex flex-col items-start gap-4">
        <Link to="/takequiz">
          <li className=" p-3 rounded hover:bg-gray-500 hover:text-white">
            Math Quiz ghjjjdkdkd
            <FontAwesomeIcon icon={faArrowRight} className="pl-2" />
          </li>
        </Link>

        <li className=" p-3 rounded hover:bg-gray-500 hover:text-white">
          science Quiz ghjjjdkdkdkkdkkdkkkdkkdkkdkkdk
          <FontAwesomeIcon icon={faArrowRight} className="pl-2" />
        </li>
        <li className=" p-3 rounded hover:bg-gray-500 hover:text-white">
          Math Quiz ghjjjdkdkdkkdkkdkkkdkkdkkdkkdk
          <FontAwesomeIcon icon={faArrowRight} className="pl-2" />
        </li>
        <li className=" p-3 rounded hover:bg-gray-500 hover:text-white">
          science Quiz ghjjjdkdkdkkdkkdkkkdkkdkkdkkdk
          <FontAwesomeIcon icon={faArrowRight} className="pl-2" />
        </li>
      </ul>
    </div>
  );
}

export default QuizList;
