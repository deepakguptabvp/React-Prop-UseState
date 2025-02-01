import React from "react";

const Home = ({ contactList }) => {
  return (
    <div>
      Home
      {contactList.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <h1>{item.message}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
