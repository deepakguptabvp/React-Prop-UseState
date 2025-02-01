import { useState, useEffect } from "react";
import TestimonialList from "./TestimonialList";

const testimonialArray = [
  { name: "shivam", feedback: "nice website" },
  { name: "kaku", feedback: "nice one" },
  { name: "shiva", feedback: " website" },
];

export default function TestimonialApp() {
  const [activeIndex, setActiveIndex] = useState(0);

  const arrayLength = testimonialArray.length;

  useEffect(() => {
    const timer = setInterval(() => {
      if (activeIndex <= arrayLength - 2) {
        const newActiveIndex = activeIndex + 1;
        setActiveIndex(newActiveIndex);
      } else {
        setActiveIndex(0);
      }
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [activeIndex]);

  const handlePrevious = () => {
    if (activeIndex !== 0) {
      const newActiveIndex = activeIndex - 1;
      setActiveIndex(newActiveIndex);
    } else {
      setActiveIndex(arrayLength - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex <= arrayLength - 2) {
      const newActiveIndex = activeIndex + 1;
      setActiveIndex(newActiveIndex);
    } else {
      setActiveIndex(0);
    }
  };

  return (
    <div>
      <h1>Testimonial Slider</h1>
      <TestimonialList
        testimonial={testimonialArray}
        activeIndex={activeIndex}
      />
      <button onClick={() => handlePrevious()}>Previous</button>
      <button onClick={() => handleNext()}>Next</button>
    </div>
  );
}
