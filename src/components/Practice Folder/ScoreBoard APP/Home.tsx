import React, { useState } from "react";

const Home = ({ scoreList, setScoreList }) => {
  const [currentRun, setCurrentRun] = useState("");
  // cricket scoreboard div
  //input box with update run button
  //show total run
  //show ball number corresponding to runs scored

  const handleUpdateRun = () => {
    const newScoreList = [...scoreList];
    const newBallNumber = newScoreList.length + 1;
    const newCurrentRun = parseInt(currentRun);
    const newObj = { ballNo: newBallNumber, run: newCurrentRun };
    newScoreList.push(newObj);
    setScoreList(newScoreList);
    setCurrentRun("");
    console.log(newBallNumber);
  };

  const totalRun = (scoreList) => {
    let run = 0;
    for (let i = 0; i < scoreList.length; i++) {
      let newRun = scoreList[i].run;
      run = run + newRun;
    }
    return run;
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <div className="w-full max-w-md">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="text"
            className="w-full sm:w-48 px-4 py-2 rounded-xl border-2 border-orange-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all duration-200"
            placeholder="Enter runs"
            value={currentRun}
            onChange={(e) => {
              setCurrentRun(e.target.value);
            }}
          />
          <button
            disabled={scoreList.length === 6}
            className={`w-full sm:w-auto px-6 py-2 rounded-xl font-semibold transition-all duration-200
              ${scoreList.length === 6
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg transform hover:scale-105"
              }`}
            onClick={handleUpdateRun}
          >
            Update Run
          </button>
        </div>
      </div>

      <div className="w-full max-w-md bg-orange-50 rounded-xl p-4 shadow-md">
        <h2 className="text-xl font-bold text-orange-700 text-center mb-4">
          Total Runs: {totalRun(scoreList)}
        </h2>

        <div className="space-y-3">
          {scoreList.map((item) => (
            <div
              key={item.ballNo}
              className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 flex items-center justify-center bg-orange-100 rounded-full text-orange-700 font-semibold">
                  {item.ballNo}
                </span>
                <span className="text-gray-600">Ball</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Runs:</span>
                <span className="font-semibold text-orange-700">{item.run}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
