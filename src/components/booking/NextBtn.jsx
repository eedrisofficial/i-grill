import React from "react";

const NextBtn = ({ choice }) => {
  return (
    <React.Fragment>
      {" "}
      <div className="flex justify-start items-start gap-5">
        <button
          onClick={() => choice("grill")}
          className="group hover:flex gap-1"
        >
          1 <span className="text-red-400 hidden group-hover:flex">Grill</span>
        </button>
        <button
          onClick={() => choice("canapes")}
          className="group hover:flex gap-1"
        >
          2{" "}
          <span className="text-red-400 hidden group-hover:flex">canapes</span>
        </button>
        <button
          onClick={() => choice("main")}
          className="group hover:flex  gap-1"
        >
          3 <span className="text-red-400 hidden group-hover:flex">main</span>
        </button>
      </div>
    </React.Fragment>
  );
};

export default NextBtn;
