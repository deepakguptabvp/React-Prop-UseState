import React from "react";

const TaskInput = ({ task, handleAddTask, setTask }) => {
  return (
    <div>
      {" "}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
