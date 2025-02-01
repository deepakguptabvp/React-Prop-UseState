import React, { useState } from "react";
import TabContent from "./TabContent";
import TabNavigation from "./TabNavigation";

const tabList = [
  { title: "Home", desc: "Home Section" },
  { title: "About", desc: "About Section" },
  { title: "Contact", desc: "Contact Section" },
];

const TabApp = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center m-5 p-5">
      TabApp
      <TabNavigation
        tabs={tabList}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabContent tabs={tabList} activeTab={activeTab} />
    </div>
  );
};

export default TabApp;
