import React from "react";

function Result() {
  return (
    <div className="grid place-content-center my-10 mx-auto w-[30vw] min-w-[300px] h-[80vh] border-2 border-black rounded-md shadow-2xl gap-6">
      <h1 className="text-center text-2xl font-extrabold underline uppercase tracking-widest">Scorecard</h1>
      <p>No.of correct answers : </p>
      <p>No.of wrong answers : </p>
      <p>Total score : </p>

      <button className=" w-40 py-2 bg-slate-500 rounded-lg text-xl font-bold text-white">
        Try Again
      </button>
    </div>
  );
}

export default Result;
