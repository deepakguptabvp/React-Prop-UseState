import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    const updatedCounter = count + 1;
    setCount(updatedCounter);
  };

  const handleDecrement = () => {
    const updatedCounter = count - 1;
    setCount(updatedCounter);
  };

  return (
    <div className="items-center justify-center flex flex-col m-5 p-5 border-2 border-cyan-700">
      <h1>
        {" "}
        Counter:<strong> {count}</strong>
      </h1>
      <div className="flex flex-row">
        <button
          onClick={() => handleIncrement()}
          className="text-xl font-bold bg-slate-500 m-2 rounded-lg w-10 h-10 "
        >
          +
        </button>
        <button
          className="text-xl font-bold bg-slate-500 m-2 rounded-lg w-10 h-10"
          onClick={() => handleDecrement()}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
