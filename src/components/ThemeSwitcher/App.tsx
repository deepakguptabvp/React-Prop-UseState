import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import UserCard from "./UserCard";

const App = () => {
  const [mode, setMode] = useState("light");
  return (
    <div className="p-3 items-center justify-center border-2 border-cyan-500">
      <h1>Theme App</h1>
      <ThemeSwitcher mode={mode} setMode={setMode} />
      <UserCard name={"shivam"} email={"abc@gmail.com"} mode={mode} />
    </div>
  );
};

export default App;
