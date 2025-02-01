import React, { useEffect, useState } from "react";

const App = ({ scoreList, setScoreList }) => {
  // Important topic to learn (React lifecycle Method)
  useEffect(() => {
    console.log("App Component Mount");
    return () => {
      console.log("App Component UnMount");
    };
  }, []);

  const totalRun = (scoreArray) => {
    let total = 0;
    for (let i = 0; i < scoreArray.length; i++) {
      let newRun = scoreArray[i].run;
      total = total + newRun;
    }
    return total;
  };

  const [currentRun, setCurrentRun] = useState("");
  console.log(currentRun);

  const handleUpdateRun = () => {
    let newScoreList = [...scoreList];
    const scoreListLength = newScoreList.length;
    let ballNumber = scoreListLength + 1;
    let newCurrentRun = parseInt(currentRun);
    let newObj = { ballNo: ballNumber, run: newCurrentRun };
    newScoreList.push(newObj);
    setScoreList(newScoreList);
    setCurrentRun("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
          Cricket Score Board
        </h1>

        <div className="flex gap-4 mb-6">
          <input
            type="text"
            className="flex-1 px-4 py-2 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
            value={currentRun}
            onChange={(e) => {
              let valueChange = e.target.value;
              setCurrentRun(valueChange);
            }}
            placeholder="Enter runs"
          />

          <button
            disabled={scoreList.length === 6}
            onClick={() => handleUpdateRun()}
            className={`px-4 py-2 rounded-lg font-semibold text-white transition-all duration-200
              ${
                scoreList.length === 6
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700 active:scale-95"
              }`}
          >
            Update Run
          </button>
        </div>

        <div className="bg-green-50 rounded-lg p-4 mb-6">
          <h1 className="text-2xl font-bold text-green-800 text-center">
            Total Run: {totalRun(scoreList)}
          </h1>
        </div>

        <div className="space-y-3">
          {scoreList.map((item) => (
            <div
              key={item.ballNo}
              className="flex justify-between items-center bg-green-50 p-4 rounded-lg hover:bg-green-100 transition"
            >
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                  {item.ballNo}
                </span>
                <h2 className="text-gray-700 font-medium">Ball</h2>
              </div>
              <div className="flex items-center gap-2">
                <h2 className="text-gray-700 font-medium">Runs:</h2>
                <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                  {item.run}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
