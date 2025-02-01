import React from "react";

const TabNavigation = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div>
      {tabs.map((item, index) => {
        return (
          <button
            key={index}
            className={activeTab === index ? "bg-slate-500 m-5 p-5" : "m-5 p-5"}
            onClick={() => {
              setActiveTab(index);
            }}
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
