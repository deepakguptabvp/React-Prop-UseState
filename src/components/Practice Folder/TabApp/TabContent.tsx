import React from "react";

const TabContent = ({ tabs, activeTab }) => {
  return (
    <div className="flex flex-col items-center justify-center m-5 p-5">
      {tabs.map((item, index) => {
        if (activeTab === index) {
          return (
            <p key={index} className=" m-5 p-5">
              {item.desc}
            </p>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default TabContent;
