import React, { useState } from "react";
import App from "./App";

const teamArr = ["Shivam", "Deepak", "Virat", "Sachin"];

const Home = () => {
  const [activeItem, setActiveItem] = useState("Shivam");

  const [scoreList1, setScoreList1] = useState([
    { ballNo: 1, run: 4 },
    { ballNo: 2, run: 6 },
  ]);

  const [scoreList2, setScoreList2] = useState([
    { ballNo: 1, run: 4 },
    { ballNo: 2, run: 6 },
  ]);

  const handleActiveItem = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="flex justify-center items-center">
      {teamArr.map((item) => {
        return (
          <div key={item} className="flex flex-row items-center justify-center">
            <button
              className="flex flex-row border-2 rounded-xl  m-5 p-5"
              style={{
                backgroundColor: activeItem === item ? "darkgray" : "",
              }}
              onClick={() => {
                handleActiveItem(item);
              }}
            >
              {item}
            </button>
          </div>
        );
      })}

      {/* Body ScoreBoard part  */}
      {activeItem === "Shivam" ? (
        <div>
          <h1>Shivam ScoreBoard</h1>
          <App scoreList={scoreList1} setScoreList={setScoreList1} />
        </div>
      ) : null}
      {activeItem === "Deepak" ? (
        <div>
          <h1>Deepak ScoreBoard</h1>
          <App scoreList={scoreList2} setScoreList={setScoreList2} />
        </div>
      ) : null}
    </div>
  );
};

export default Home;
