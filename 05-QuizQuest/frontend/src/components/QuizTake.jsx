import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function QuizTake() {
  return (
    <div className="grid place-content-center h-screen gap-6">
      <h2>Title Of the Quiz</h2>
      <h4>Problem statement</h4>
      <div>
        <p>A-Hello</p>
        <p>B-world</p>
        <p>C-Dyummy</p>
      </div>
      <div className="flex items-center justify-center gap-6">
        <button className="px-4 py-2 bg-slate-500 rounded text-white text-center hover:bg-slate-700">
          <FontAwesomeIcon icon={faArrowLeft} className="pr-2" />
          back
        </button>
        <button className="px-4 py-2 bg-slate-500 rounded text-white text-center hover:bg-slate-700">
          <FontAwesomeIcon icon={faArrowRight} className="pr-2" />
          next
        </button>
      </div>
    </div>
  );
}

export default QuizTake;
