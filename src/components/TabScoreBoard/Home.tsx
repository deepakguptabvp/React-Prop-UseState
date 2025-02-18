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
  const [scoreList3, setScoreList3] = useState([
    { ballNo: 1, run: 4 },
    { ballNo: 2, run: 6 },
  ]);
  const [scoreList4, setScoreList4] = useState([
    { ballNo: 1, run: 4 },
    { ballNo: 2, run: 6 },
  ]);

  const handleActiveItem = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-green-500 p-2 sm:p-4 md:p-6 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto backdrop-blur-sm bg-white/10 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8">
        {/* Player Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-8">
          {teamArr.map((item) => (
            <div key={item} className="transform transition-all duration-300 hover:scale-105">
              <button
                className={`px-3 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base
                  ${
                    activeItem === item
                      ? "bg-green-600 text-white shadow-lg scale-105 hover:bg-green-700"
                      : "bg-white/80 text-green-700 hover:bg-green-50"
                  }
                  border-2 border-green-300 hover:border-green-400 backdrop-blur-sm`}
                onClick={() => handleActiveItem(item)}
              >
                {item}
              </button>
            </div>
          ))}
        </div>

        {/* ScoreBoard Sections */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-4 sm:p-6 md:p-8 transition-all duration-300">
          {activeItem === "Shivam" && (
            <div className="space-y-4 animate-fadeIn">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700 text-center mb-3 sm:mb-6">
                Shivam's ScoreBoard
              </h1>
              <App scoreList={scoreList1} setScoreList={setScoreList1} />
            </div>
          )}
          {activeItem === "Deepak" && (
            <div className="space-y-4 animate-fadeIn">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700 text-center mb-3 sm:mb-6">
                Deepak's ScoreBoard
              </h1>
              <App scoreList={scoreList2} setScoreList={setScoreList2} />
            </div>
          )}
          {activeItem === "Virat" && (
            <div className="space-y-4 animate-fadeIn">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700 text-center mb-3 sm:mb-6">
                Virat's ScoreBoard
              </h1>
              <App scoreList={scoreList3} setScoreList={setScoreList3} />
            </div>
          )}
          {activeItem === "Sachin" && (
            <div className="space-y-4 animate-fadeIn">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700 text-center mb-3 sm:mb-6">
                Sachin's ScoreBoard
              </h1>
              <App scoreList={scoreList4} setScoreList={setScoreList4} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
