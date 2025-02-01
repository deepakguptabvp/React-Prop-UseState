import React from "react";
import ListItem from "./ListItem";

const List = ({ tasks, handleRemoveTask, index }) => {
  return (
    <div>
      <ul>
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          tasks.map((task, index) => (
            <ListItem
              key={index}
              task={task}
              handleRemoveTask={handleRemoveTask}
              index={index}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default List;
