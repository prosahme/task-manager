import React, { useState } from "react";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskData = {
      title,
      description,
      dueDate,
      priority,
    };

    console.log("Form Submitted:", taskData);

    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("Medium");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h3 className="form-title">Add New Task</h3>

      <label>
        Title (required)
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>

      <label>
        Description
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </label>

      <label>
        Due Date
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </label>

      <label>
        Priority
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </label>

      <button type="submit">Add Task</button>
    </form>
  );
}
