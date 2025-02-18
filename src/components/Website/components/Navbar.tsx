import React from "react";

const navList = ["Home", "About", "Contact", "Cart"];

const Navbar = ({ setActiveTab, activeTab }) => {
  const handleClick = (item) => {
    setActiveTab(item);
  };
  console.log(activeTab);

  return (
    <div className="flex flex-row m-2 p-5">
      {navList.map((item, index) => {
        return (
          <div key={index} className="m-2 p-5">
            <button
              className="p-4 rounded-lg"
              onClick={() => handleClick(item)}
              style={{ backgroundColor: activeTab === item ? "gray" : "" }}
            >
              {item}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
