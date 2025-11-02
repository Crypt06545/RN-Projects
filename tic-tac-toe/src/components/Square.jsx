import React, { useState } from "react";

const Square = () => {
  const [value, setValue] = useState(null);

  // const handleClick = () => {
  //   setValue("X");
  // };
  return (
    <>
      <button
        className="bg-zinc-300 h-20 w-20 text-black text-2xl"
        onClick={() => handleClick()}
      >
        {value}
      </button>
    </>
  );
};

export default Square;
