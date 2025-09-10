import React, { useEffect, useState } from "react";

export default function TaskForm({ onSave, editingTask, onCancel }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [error, setError] = useState("");
  const isEditing = Boolean(editingTask);

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title || "");
      setDesc(editingTask.description || "");
      setDueDate(editingTask.dueDate || "");
      setPriority(editingTask.priority || "Medium");
      setError("");
    } else {
      setTitle("");
      setDesc("");
      setDueDate("");
      setPriority("Medium");
      setError("");
    }
  }, [editingTask]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) {
      setError("Task title cannot be blank");
      return;
    }
    setError("");
    onSave(
      {
        title: title.trim(),
        description: desc.trim(),
        dueDate: dueDate || "",
        priority,
      },
      editingTask?.id ?? null
    );
  }

  return (
    <form className="form-grid" onSubmit={handleSubmit} noValidate>
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
          aria-invalid={!!error}
        />
        {error && (
          <div className="field-error" role="alert">
            {error}
          </div>
        )}
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
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              setError("");
              onCancel();
            }}
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!title.trim()}
        >
          {isEditing ? "Save Changes" : "Add Task"}
        </button>
      </div>
    </form>
  );
}
