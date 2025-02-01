import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialList = ({ testimonial, activeIndex }) => {
  console.log(testimonial);
  return (
    <div>
      {testimonial.map((item, index) => {
        if (activeIndex === index) {
          return (
            <TestimonialCard
              key={index}
              name={item.name}
              feedback={item.feedback}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default TestimonialList;
