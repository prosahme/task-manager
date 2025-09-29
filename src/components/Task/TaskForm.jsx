import React, { useState, useEffect } from "react";

export default function TaskForm({ onSave, editingTask, onCancel, onClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("medium");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title || "");
      setDescription(editingTask.description || "");
      setDueDate(editingTask.dueDate || "");
      setPriority(editingTask.priority || "medium");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSave({ title, description, dueDate, priority }, editingTask?.id);

    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("medium");

    if (onClose) onClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 rounded-xl bg-white shadow-md"
    >
      <input
        type="text"
        placeholder="Task title"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-400"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Description"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-400"
        rows="3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="date"
          className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-400"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <select
          className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-400"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <button
          type="submit"
          className="rounded-lg bg-green-600 px-4 py-2 text-white text-sm font-medium hover:bg-green-700 focus:ring-2 focus:ring-offset-1 focus:ring-green-400"
        >
          {editingTask ? "Update Task" : "Add Task"}
        </button>

        {editingTask && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-300 focus:ring-2 focus:ring-offset-1 focus:ring-gray-400"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
