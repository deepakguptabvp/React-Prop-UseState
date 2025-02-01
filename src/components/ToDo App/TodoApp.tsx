import { useState } from "react";
import List from "./List";
import TaskInput from "./TaskInput";

export default function NewCode() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Todo App</h1>

      <TaskInput task={task} handleAddTask={handleAddTask} setTask={setTask} />
      <List tasks={tasks} handleRemoveTask={handleRemoveTask} />
    </div>
  );
}
2;
