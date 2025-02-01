import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialList = ({ testimonial, activeIndex }) => {
  // console.log(testimonial);
  return (
    <div className="m-5 ">
      {testimonial.map((item, index) => {
        // console.log(item);
        if (activeIndex === index) {
          return (
            <div
              key={index}
              className="m-5 p-5 border-2 border-sky-200 rounded-lg"
            >
              <TestimonialCard
                name={item.name}
                feedback={item.feedback}
                image={item.image}
              />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default TestimonialList;
