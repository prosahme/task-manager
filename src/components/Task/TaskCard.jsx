import React from "react";
import { motion } from "framer-motion";
import { FiTrash2, FiEdit2, FiCheckCircle, FiCircle } from "react-icons/fi";

export default function TaskCard({ task, onToggle, onEdit, onDelete }) {
  const { id, title, description, dueDate, priority, completed } = task;

  const dueLabel = (() => {
    if (!dueDate) return null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const d = new Date(dueDate);
    d.setHours(0, 0, 0, 0);
    const diffDays = Math.round((d - today) / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return "Due today";
    if (diffDays === 1) return "Due tomorrow";
    if (diffDays > 1) return `Due in ${diffDays} day${diffDays > 1 ? "s" : ""}`;
    if (diffDays === -1) return "Overdue by 1 day";
    return `Overdue by ${Math.abs(diffDays)} days`;
  })();

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={`task-card ${completed ? "is-done" : ""} `}
    >
      <button
        className="check"
        onClick={() => onToggle(id)}
        aria-label="Toggle complete"
      >
        {completed ? <FiCheckCircle size={22} /> : <FiCircle size={22} />}
      </button>

      <div className="task-content">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <h4 className="task-title">{title}</h4>
          <span className={`badge priority ${priority.toLowerCase()}`}>
            {priority}
          </span>
        </div>

        {description && <p className="task-desc">{description}</p>}

        <div className="task-meta">
          {dueLabel && <span className="badge subtle">{dueLabel}</span>}
          {completed && <span className="badge success">Completed</span>}
        </div>
      </div>

      <div className="task-actions">
        <button
          className="icon-btn"
          onClick={() => onEdit(task)}
          aria-label="Edit"
        >
          <FiEdit2 size={18} />
        </button>
        <button
          className="icon-btn danger"
          onClick={() => onDelete(id)}
          aria-label="Delete"
        >
          <FiTrash2 size={18} />
        </button>
      </div>
    </motion.article>
  );
}
