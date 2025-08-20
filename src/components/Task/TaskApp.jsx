import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { motion, AnimatePresence } from "framer-motion";

export default function TaskApp() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      ...taskData,
      completed: false,
    };

    setTasks((prev) => [newTask, ...prev]);
    console.log("Updated Task List:", [newTask, ...tasks]);
  };

  return (
    <div className="task-app">
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ✨ My Stunning Task Manager
      </motion.h1>
      <TaskForm onSubmit={handleAddTask} />
      <AnimatePresence>
        <TaskList tasks={tasks} />
      </AnimatePresence>
    </div>
  );
}
