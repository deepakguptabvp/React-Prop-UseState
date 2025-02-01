import React, { useState } from "react";
import Counter from "./Counter";

const CounterApp = () => {
  const [counterList, setCounterList] = useState([1, 1, 1, 1]);

  const handleAddCounter = () => {
    // let newCounterList = [];
    // for (let i = 0; i < counterList.length; i++) {
    //   newCounterList[i] = counterList[i];
    // }
    // let lastIndex = newCounterList.length - 1;
    // newCounterList[lastIndex + 1] = 1;
    // setCounterList(newCounterList);
    const newCounterList = [...counterList];
    newCounterList.push(1);
    setCounterList(newCounterList);
  };

  const handleRemoveCounter = () => {
    const newCounterList = [...counterList];
    newCounterList.pop();
    setCounterList(newCounterList);
  };
  return (
    <div className="items-center justify-center flex flex-col">
      <h1 className="text-3xl font-bold m-3 p-3">Counter App</h1>
      <div className="flex flex-row">
        <button
          className=" m-5 p-5 border-2 bg-green-500 font-medium"
          onClick={() => {
            handleAddCounter();
          }}
        >
          Add counter
        </button>
        <button
          className=" m-5 p-5 border-2 bg-red-500 font-medium"
          onClick={() => {
            handleRemoveCounter();
          }}
        >
          Remove Counter
        </button>
      </div>
      <div className="flex flex-row">
        {counterList.map((item, index) => {
          return <div key={index}>{<Counter />}</div>;
        })}
      </div>
    </div>
  );
};

export default CounterApp;
