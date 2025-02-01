import React from "react";

const ListItem = ({ task, handleRemoveTask, index }) => {
  return (
    <div>
      {" "}
      <li>
        {task} <button onClick={() => handleRemoveTask(index)}>X</button>
      </li>
    </div>
  );
};

export default ListItem;
