import React, { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Body from "./Body";

const App = () => {
  const [activeTab, setActiveTab] = useState("Contact");
  return (
    <div className="items-center justify-center flex flex-col">
      <Header />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Body activeTab={activeTab} />
      <Footer />
    </div>
  );
};

export default App;
