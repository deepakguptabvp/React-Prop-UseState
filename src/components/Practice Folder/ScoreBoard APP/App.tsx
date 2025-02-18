import React, { useState } from "react";
import Home from "./Home";

const App = () => {
  const navList = ["Deepak", "Shivam", "Yuvraj", "Harbhajan"];

  const [activeIndex, setActiveIndex] = useState("Deepak");

  const [scoreList1, setScoreList1] = useState([
    { ballNo: 1, run: 3 },
    { ballNo: 2, run: 6 },
  ]);
  const [scoreList2, setScoreList2] = useState([
    { ballNo: 1, run: 3 },
    { ballNo: 2, run: 6 },
  ]);
  const [scoreList3, setScoreList3] = useState([
    { ballNo: 1, run: 3 },
    { ballNo: 2, run: 6 },
  ]);
  const [scoreList4, setScoreList4] = useState([
    { ballNo: 1, run: 3 },
    { ballNo: 2, run: 6 },
  ]);

  const handleActiveItem = (item) => {
    setActiveIndex(item);
    console.log(item);
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 bg-gradient-to-r from-orange-100 to-orange-200 p-4 rounded-xl shadow-md">
        {navList.map((item) => (
          <div
            key={item}
            className="transform transition-all duration-300 hover:scale-105"
          >
            <button
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base
                ${activeIndex === item
                  ? "bg-orange-500 text-white shadow-lg scale-105 hover:bg-orange-600"
                  : "bg-white/80 text-orange-700 hover:bg-orange-50"
                }
                border-2 border-orange-300 hover:border-orange-400`}
              onClick={() => handleActiveItem(item)}
            >
              {item}
            </button>
          </div>
        ))}
      </div>

      {/* Score Board of Different Player's */}
      <div className="flex flex-col items-center justify-center space-y-6">
        {activeIndex === "Deepak" && (
          <div className="w-full max-w-2xl animate-fadeIn">
            <h1 className="text-2xl sm:text-3xl font-bold text-orange-700 text-center mb-6">
              Deepak's Score Board
            </h1>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-4 sm:p-6">
              <Home scoreList={scoreList1} setScoreList={setScoreList1} />
            </div>
          </div>
        )}
        {activeIndex === "Shivam" && (
          <div className="w-full max-w-2xl animate-fadeIn">
            <h1 className="text-2xl sm:text-3xl font-bold text-orange-700 text-center mb-6">
              Shivam's Score Board
            </h1>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-4 sm:p-6">
              <Home scoreList={scoreList2} setScoreList={setScoreList2} />
            </div>
          </div>
        )}
        {activeIndex === "Yuvraj" && (
          <div className="w-full max-w-2xl animate-fadeIn">
            <h1 className="text-2xl sm:text-3xl font-bold text-orange-700 text-center mb-6">
              Yuvraj's Score Board
            </h1>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-4 sm:p-6">
              <Home scoreList={scoreList3} setScoreList={setScoreList3} />
            </div>
          </div>
        )}
        {activeIndex === "Harbhajan" && (
          <div className="w-full max-w-2xl animate-fadeIn">
            <h1 className="text-2xl sm:text-3xl font-bold text-orange-700 text-center mb-6">
              Harbhajan's Score Board
            </h1>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-4 sm:p-6">
              <Home scoreList={scoreList4} setScoreList={setScoreList4} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
