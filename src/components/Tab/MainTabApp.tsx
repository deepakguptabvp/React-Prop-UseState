import React, { useState } from "react";
import TabNavigation from "./TabNavigation";
import TabContent from "./TabContent";

const navigationMenu = [
  { title: "home", content: "Home Tab" },
  { title: "about", content: "about Tab" },
  { title: "contact", content: "contact Tab" },
];

const MainTabApp = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <h1>Main tab APP</h1>
      <TabNavigation
        tabs={navigationMenu}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabContent activeTab={activeTab} tabs={navigationMenu} />
    </div>
  );
};

export default MainTabApp;
