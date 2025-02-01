"use client";
import React, { useState } from "react";
import ItemUI from "./ItemUI";

const Users = ({ list }) => {
  const [userList, setUserList] = useState(list);
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  const handleDelete = (item) => {
    let newUserList = [];
    console.log(item);
    for (let i = 0; i < userList.length; i++) {
      if (item.id !== userList[i].id) {
        newUserList.push(userList[i]);
      }
    }
    console.log(newUserList);
    setUserList(newUserList);
  };

  const handleAdd = () => {
    const lastElement = userList.length;
    let newUserList = { id: lastElement + 1, name: firstName, age: age };
    console.log(newUserList);
    setUserList([...userList, newUserList]);
    setFirstName("");
    setAge("");
  };
  console.log(userList);

  const handleEdit = (item) => {
    setFirstName(item.name);
    setAge(item.age);
    setIsUpdate(true);
    console.log(item.age);
  };

  const handleUpdate = () => {};

  return (
    <div className="container mx-auto px-4 mt-10">
      {/* Header */}
      <div className="grid grid-cols-2 gap-8 mb-6 max-w-md mx-auto text-center justify-center">
        <h1 className="font-bold text-2xl text-gray-800">Name</h1>
        <h1 className="font-bold text-2xl text-gray-800">Operations</h1>
      </div>

      <div className="flex item-center justify-center">
        <input
          type="text"
          value={firstName}
          placeholder="Enter your name"
          className=" m-3 border shadow-xl h-8 p-2 max-w-min"
          onChange={(e) => {
            let value = e.target.value;
            console.log(value);
            setFirstName(value);
          }}
        />
        <input
          type="text"
          value={age}
          placeholder="Enter your age"
          className="m-3 border shadow-xl h-8 p-2 max-w-min"
          onChange={(e) => {
            let value = e.target.value;
            console.log(value);
            setAge(value);
          }}
        />
        {!isUpdate ? (
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg max-w-min"
            onClick={() => handleAdd()}
          >
            Add
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg max-w-min"
            onClick={() => handleUpdate()}
          >
            Update
          </button>
        )}
      </div>

      {/* User List */}
      {userList.length > 0 &&
        userList?.map((item, index) => (
          <ItemUI
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            item={item}
            index={index}
          />
        ))}
    </div>
  );
};

export default Users;
