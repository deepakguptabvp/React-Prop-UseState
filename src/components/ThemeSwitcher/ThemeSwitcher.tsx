import React, { useState } from "react";

const ThemeSwitcher = ({ mode, setMode }) => {
  const handleToggle = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  console.log(mode);

  return (
    <div className="p-3 items-center justify-center border-2 border-black">
      <button
        onClick={() => {
          handleToggle();
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export default ThemeSwitcher;
