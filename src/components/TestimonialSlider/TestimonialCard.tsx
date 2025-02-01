import React from "react";

const TestimonialCard = ({ name, feedback }) => {
  return (
    <div className="m-5">
      <h1>Name : {name}</h1>
      <h1>Feedback : {feedback}</h1>
    </div>
  );
};

export default TestimonialCard;
