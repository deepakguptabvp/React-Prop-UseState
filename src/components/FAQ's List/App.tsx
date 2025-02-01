import React from "react";
import QuestionItem from "./QuestionItem";

const questionList = [
  { ques: "What is your name", ans: "Deepak" },
  { ques: "What is Sun color", ans: "White" },
  { ques: "What is Moon color", ans: "Gray" },
];

const App = () => {
  return (
    <div>
      <h1>FAQ's List</h1>
      {questionList.map((item, index) => {
        return (
          <QuestionItem question={item.ques} answer={item.ans} key={index} />
        );
      })}
    </div>
  );
};

export default App;
