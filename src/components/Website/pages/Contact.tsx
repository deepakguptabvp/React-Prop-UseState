import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  console.log(name, message);

  const handleSubmit = () => {
    // const newContactList = [...contactList, { name: name, message: message }];
    // setContactList(newContactList); // or either you can use .push();
    setName("");
    setMessage("");
  };

  // console.log(contactList);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          const inputName = e.target.value;
          setName(inputName);
        }}
        className="border-2 p-2 m-2"
      />
      <input
        type="text"
        value={message}
        onChange={(e) => {
          const inputMsg = e.target.value;
          setMessage(inputMsg);
        }}
        className="border-2 p-2 m-2"
      />
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Contact;
