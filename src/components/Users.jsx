"use client";
import React, { useState } from "react";

const Users = ({ list }) => {
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [userList, setUserList] = useState(list);
  const [isUpdate, setIsUpdate] = useState(false);
  const [editValue, setEditValue] = useState(null);

  const handleDelete = (item) => {
    let newUserList = [];
    for (let i = 0; i < userList.length; i++) {
      if (item.name !== userList[i].name) {
        newUserList.push(userList[i]);
      }
    }
    setUserList(newUserList);
  };

  const handleAdd = () => {
    let newUser = { name: firstName, age: age };
    console.log(newUser);
    setUserList([...userList, newUser]);
  };

  const handleEdit = (item) => {
    // let newUserList = [...userList];
    setFirstName(item.name);
    setAge(item.age);
    setIsUpdate(true);
    setEditValue(item);
    // for (let i = 0; i < userList.length; i++) {
    //   if (item.id === userList[i].id) {
    //   }
    // }
    // console.log(item);
    // console.log(userList[0].name);
    // setUserList(newUserList);
  };

  const handleUpdate = () => {
    let newUserlist = [];
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].id === editValue.id) {
        newUserlist[i] = {
          id: editValue.id,
          name: firstName,
          age: age,
        };
      } else {
        newUserlist[i] = userList[i];
      }
    }
    console.log(newUserlist);

    setUserList(newUserlist);
    setFirstName("");
    setAge("");
    setIsUpdate(false);
  };

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
      {userList.map((item) => (
        <div
          key={item.name}
          className="grid grid-cols-4 gap-4 mx-auto items-center max-w-md mb-4 p-4 bg-white rounded-lg shadow-lg"
        >
          {/* Input */}
          <h2 type="text" className="text-lg text-gray-700">
            {item.name}
          </h2>
          <h2 type="text" className="text-lg text-gray-700">
            {item.age}
          </h2>

          {/* Delete Functionality */}
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
            onClick={() => handleDelete(item)}
          >
            Delete
          </button>

          {/* Edit functionality */}
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
            onClick={() => handleEdit(item)}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default Users;
