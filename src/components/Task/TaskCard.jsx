import React from "react";
import { motion } from "framer-motion";

export default function TaskCard({ task, onToggle, onEdit, onDelete }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className={`flex items-start justify-between gap-4 p-4 mb-3 rounded-xl shadow-md transition ${
        task.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <div className="flex-1">
        <h4
          className={`text-lg font-semibold ${
            task.completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {task.title}
        </h4>
        {task.description && (
          <p
            className={`mt-1 text-sm ${
              task.completed ? "line-through text-gray-400" : "text-gray-600"
            }`}
          >
            {task.description}
          </p>
        )}
        {task.dueDate && (
          <p className="mt-2 text-xs text-gray-500">
            📅 Due: {new Date(task.dueDate).toLocaleDateString()}
          </p>
        )}
        <span
          className={`inline-block mt-2 px-2 py-1 text-xs rounded-lg ${
            task.priority === "high"
              ? "bg-red-100 text-red-600"
              : task.priority === "low"
              ? "bg-blue-100 text-blue-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {task.priority.toUpperCase()}
        </span>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2">
        <button
          onClick={() => onToggle(task.id)}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
            task.completed
              ? "bg-gray-200 text-gray-600 hover:bg-gray-300"
              : "bg-green-600 text-white hover:bg-green-700"
          }`}
        >
          {task.completed ? "Undo" : "Done"}
        </button>
        <button
          onClick={() => onEdit(task)}
          className="px-3 py-1 rounded-lg text-sm font-medium bg-blue-500 text-white hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="px-3 py-1 rounded-lg text-sm font-medium bg-red-500 text-white hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
}
