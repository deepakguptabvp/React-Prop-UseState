import React from "react";

const TabNavigation = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="p-2">
      {tabs.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              setActiveTab(index);
            }}
            className={activeTab === index ? "bg-cyan-700 m-3 p-3" : "m-3 p-3"}
          >
            {" "}
            {item.title}
          </button>
        );
      })}
    </div>
  );
};

export default TabNavigation;
