import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsnext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const nexSquares = squares.slice();
    if (squares[i]) {
      return;
    }
    if (xIsnext) {
      nexSquares[i] = "X";
    } else {
      nexSquares[i] = "O";
    }
    setSquares(nexSquares);
    setXIsNext(!xIsnext);

    const calculateWinner = (squares) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
          squares[a] &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]
        ) {
          return squares[a];
        }
      }
      return null;
    };

    const winner = calculateWinner(nexSquares);
    if (winner) {
      console.log("Winner:", winner);
    }
  };

  return (
    <div className="border-4 border-gray-800 w-64 mx-auto mt-10">
      <div className="grid grid-cols-3 gap-1">
        <Square onSquareClick={() => handleClick(0)} value={squares[0]} />
        <Square onSquareClick={() => handleClick(1)} value={squares[1]} />
        <Square onSquareClick={() => handleClick(2)} value={squares[2]} />
        <Square onSquareClick={() => handleClick(3)} value={squares[3]} />
        <Square onSquareClick={() => handleClick(4)} value={squares[4]} />
        <Square onSquareClick={() => handleClick(5)} value={squares[5]} />
        <Square onSquareClick={() => handleClick(6)} value={squares[6]} />
        <Square onSquareClick={() => handleClick(7)} value={squares[7]} />
        <Square onSquareClick={() => handleClick(8)} value={squares[8]} />
      </div>
    </div>
  );
};

export default Board;
