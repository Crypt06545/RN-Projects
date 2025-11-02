import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <div className="border-4 border-gray-800 w-64 mx-auto mt-10">
      <div className="grid grid-cols-3 gap-1">
        {/* 3x3 Grid of Squares */}
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default Board;
