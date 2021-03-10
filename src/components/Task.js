import React from "react";
import { FaTimes } from "react-icons/fa";

export const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`tasks ${task.reminder ? "reminder" : ""}`}>
      <h3>
        <div onClick={() => onToggle(task.id)}>{task.name}</div>
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.date}</p>
    </div>
  );
};
