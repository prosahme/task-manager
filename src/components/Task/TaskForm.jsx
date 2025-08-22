import React, { useEffect, useState } from "react";

export default function TaskForm({ onSave, editingTask, onCancel }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const isEditing = Boolean(editingTask);

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title || "");
      setDesc(editingTask.description || "");
      setDueDate(editingTask.dueDate || "");
      setPriority(editingTask.priority || "Medium");
    } else {
      setTitle("");
      setDesc("");
      setDueDate("");
      setPriority("Medium");
    }
  }, [editingTask]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) {
      alert("Please enter a task title.");
      return;
    }
    onSave(
      {
        title: title.trim(),
        description: desc.trim(),
        dueDate: dueDate || "",
        priority,
      },
      editingTask?.id || null
    );
  }

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <div className="field">
        <label>
          Title <span className="req">*</span>
        </label>
        <input
          className="input"
          type="text"
          placeholder="e.g., Finish React assignment"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Description</label>
        <textarea
          className="textarea"
          rows={4}
          placeholder="Optional notes…"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>

      <div className="field-row-2">
        <div className="field">
          <label>Due date</label>
          <input
            className="input"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Priority</label>
          <select
            className="select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
      </div>

      <div className="row" style={{ justifyContent: "flex-end", gap: 10 }}>
        {isEditing && (
          <button type="button" className="btn btn-ghost" onClick={onCancel}>
            Cancel
          </button>
        )}
        <button type="submit" className="btn btn-primary">
          {isEditing ? "Save Changes" : "Add Task"}
        </button>
      </div>
    </form>
  );
}
