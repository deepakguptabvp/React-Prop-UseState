import React from "react";

const UserCard = ({ name, email, mode }) => {
  return (
    <div
      className="p-3 items-center justify-center border-2 border-red-500"
      style={{ backgroundColor: mode === "light" ? "red" : "cyan" }}
    >
      <h1>{name}</h1>
      <h1>{email}</h1>
    </div>
  );
};

export default UserCard;
