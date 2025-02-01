import React, { useState } from "react";

const QuestionItem = ({ question, answer }) => {
  const [toggle, setToggle] = useState(false);

  const handleShow = () => {
    console.log(toggle);
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  return (
    <div>
      <button
        onClick={() => {
          handleShow();
        }}
      >
        {question}
      </button>
      {toggle === false ? null : <p> {answer}</p>}
    </div>
  );
};

export default QuestionItem;
