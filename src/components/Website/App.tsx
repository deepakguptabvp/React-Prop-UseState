import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";

const App = () => {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <div className="items-center justify-center flex flex-col">
      <Header />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className=" border-2">
        <Body activeTab={activeTab} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
