import React from "react";
import Users from "./Usercopy";
import userList from "@/app/services/userList";
import ItemUiButton from "./ItemUiButton";

const LoginSignup = () => {
  return (
    <div>
      <Users list={userList} />
      <ItemUiButton
        title={"login"}
        handleClick={() => {
          console.log("Will login here.");
        }}
      />
      <ItemUiButton
        title={"signup"}
        handleClick={() => {
          console.log("Will login here.");
        }}
      />
      {/* <Users list={userList2} /> */}
    </div>
  );
};

export default LoginSignup;
