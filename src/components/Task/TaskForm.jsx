import React, { useState } from "react";
import { motion } from "framer-motion";

export default function TaskForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please fill in all required fields!");
      return;
    }

    onSubmit({ title, description, dueDate, priority });
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("Medium");
  };

  return (
    <motion.form
      className="task-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="text"
        placeholder="Task Title ✍️"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task Description 📝"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">🔥 High</option>
        <option value="Medium">⚡ Medium</option>
        <option value="Low">🌱 Low</option>
      </select>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        ➕ Add Task
      </motion.button>
    </motion.form>
  );
}
