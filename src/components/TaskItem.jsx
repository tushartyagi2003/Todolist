import React from "react";

const TaskItem = ({ task, ToggleCheck, DeleteTask }) => {
  return (
    <li>
      <div>
        <input
          type="checkbox"
          checked={task.checked}
          onChange={() => {
            ToggleCheck(task.taskname);
          }}
        />
        <p className={task.checked ? "checked" : ""}>{task.taskname}</p>
      </div>
      <button onClick={() => DeleteTask(task.taskname)}>Delete</button>
    </li>
  );
};

export default TaskItem;
