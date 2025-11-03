import React, { useState } from "react";

const Square = ({ onSquareClick, value }) => {
  return (
    <>
      <button
        className="cursor-pointer bg-zinc-300 h-20 w-20 text-black text-2xl"
        onClick={() => onSquareClick()}
      >
        {value}
      </button>
    </>
  );
};

export default Square;
