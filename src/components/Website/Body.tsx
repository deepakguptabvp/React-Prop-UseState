import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const Body = ({ activeTab }) => {
  const [contactList, setContactList] = useState([
    { name: "Shivam", message: "Paytm" },
  ]);

  if (activeTab === "Home") {
    return <Home contactList={contactList} />;
  } else if (activeTab === "About") {
    return <About />;
  } else if (activeTab === "Contact") {
    return (
      <Contact contactList={contactList} setContactList={setContactList} />
    );
  }
  return <div>Body</div>;
};

export default Body;
