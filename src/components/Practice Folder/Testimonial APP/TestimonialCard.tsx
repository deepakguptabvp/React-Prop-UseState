import Image from "next/image";
import React from "react";

const TestimonialCard = ({ name, feedback, image }) => {
  return (
    <div className="items-center justify-center flex flex-col">
      <h1>
        <strong> Name: </strong>
        {name}
      </h1>
      <h1>
        <strong>Feedback: </strong>
        {feedback}
      </h1>
      <Image
        src={image}
        width={300}
        height={300}
        alt="Picture of the React Icon"
      />
    </div>
  );
};

export default TestimonialCard;
