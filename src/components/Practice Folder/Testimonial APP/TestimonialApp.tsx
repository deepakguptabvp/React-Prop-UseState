import React, { useState } from "react";
import TestimonialList from "./TestimonialList";
const testimonialArray = [
  {
    name: "Deepak",
    feedback: "BharatPe Employee",
    image: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
  },
  {
    name: "Shivam",
    feedback: "Paytm Employee",
    image:
      "https://play-lh.googleusercontent.com/ymXDmYihTOzgPDddKSvZRKzXkboAapBF2yoFIeQBaWSAJmC9IUpSPKgvfaAgS5yFxQ=w600-h300-pc0xffffff-pd",
  },
  {
    name: "Tarun",
    feedback: "Amdocs Exployee",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmyi1HNv2kVrxMSs_-TtVElRlbbXRiM3mMQ&s",
  },
];

const TestimonialApp = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialLength = testimonialArray.length;

  const handlePrevious = () => {
    if (activeIndex !== 0) {
      const newActiveIndex = activeIndex - 1;
      setActiveIndex(newActiveIndex);
    } else {
      setActiveIndex(testimonialLength - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex <= testimonialLength - 2) {
      //problem in logic building
      const newActiveIndex = activeIndex + 1;
      setActiveIndex(newActiveIndex);
    } else {
      setActiveIndex(0); // same problem
    }
  };

  return (
    <div className="text-center justify-center m-5 p-5">
      Testimonial App
      <TestimonialList
        testimonial={testimonialArray}
        activeIndex={activeIndex}
      />
      <button
        className="m-5 p-5 rounded-lg border-2 border-slate-400 bg-slate-300 "
        onClick={() => handlePrevious()}
      >
        Previous
      </button>
      <button
        className="m-5 p-5 rounded-lg border-2 border-slate-400 bg-slate-300"
        onClick={() => handleNext()}
      >
        Next
      </button>
    </div>
  );
};

export default TestimonialApp;
