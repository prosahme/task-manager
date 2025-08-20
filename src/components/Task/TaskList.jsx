import React from "react";
import { motion } from "framer-motion";

export default function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <motion.div
          key={task.id}
          className="task-card"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.4 }}
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <small>📅 {task.dueDate || "No deadline"}</small>
          <span className={`priority ${task.priority.toLowerCase()}`}>
            {task.priority}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
