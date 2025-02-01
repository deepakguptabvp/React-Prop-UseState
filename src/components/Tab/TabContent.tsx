import React from "react";

const TabContent = ({ activeTab, tabs }) => {
  return (
    <div>
      {tabs.map((item, index) => {
        if (activeTab === index) {
          return (
            <p key={index} className=" m-5 p-5">
              {item.content}
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
