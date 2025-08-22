import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TaskForm from "./TaskForm.jsx";
import TaskCard from "./TaskCard.jsx";

const LS_KEY = "tm_tasks_v1";

export default function TaskApp() {
  const [tasks, setTasks] = useState(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [editing, setEditing] = useState(null);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function upsertTask(data, id = null) {
    if (id) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === id ? { ...t, ...data, updatedAt: Date.now() } : t
        )
      );
      setEditing(null);
    } else {
      const newTask = {
        id: (crypto?.randomUUID && crypto.randomUUID()) || String(Date.now()), //from chatgpt because i have to
        title: data.title,
        description: data.description,
        dueDate: data.dueDate,
        priority: data.priority,
        completed: false,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      setTasks((prev) => [newTask, ...prev]);
    }
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    if (editing?.id === id) setEditing(null);
  }

  function toggleComplete(id) {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, completed: !t.completed, updatedAt: Date.now() }
          : t
      )
    );
  }

  const sortedTasks = useMemo(() => {
    const copy = [...tasks];
    copy.sort((a, b) => {
      if (a.completed !== b.completed) return a.completed ? 1 : -1;
      const aHas = Boolean(a.dueDate);
      const bHas = Boolean(b.dueDate);
      if (aHas && bHas) {
        const ad = new Date(a.dueDate).getTime();
        const bd = new Date(b.dueDate).getTime();
        return ad - bd;
      }
      if (aHas) return -1;
      if (bHas) return 1;
      return b.updatedAt - a.updatedAt;
    });
    return copy;
  }, [tasks]);

  const total = tasks.length;
  const done = tasks.filter((t) => t.completed).length;
  const allDone = total > 0 && done === total;

  return (
    <section className="task-wrap">
      <motion.aside
        className="glass-card task-panel"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <h3>{editing ? "Edit Task" : "Create Task"}</h3>
        <div className="separator" />
        <TaskForm
          onSave={upsertTask}
          editingTask={editing}
          onCancel={() => setEditing(null)}
        />
      </motion.aside>

      <motion.section
        className="glass-card task-panel"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.25 }}
      >
        <div className="row" style={{ justifyContent: "space-between" }}>
          <h3>Tasks</h3>
          <span className="badge subtle">
            {total} total • {done} done
          </span>
        </div>
        <div className="separator" />

        {total === 0 ? (
          <div className="empty-state">
            <h4>No tasks yet</h4>
            <p>Add your first task and make today count ✨</p>
          </div>
        ) : (
          <>
            {allDone && (
              <motion.div
                className="motivate"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
              >
                🎉 Everything is complete — enjoy a well-deserved break!
              </motion.div>
            )}
            <div className="task-list">
              <AnimatePresence initial={false}>
                {sortedTasks.map((t) => (
                  <TaskCard
                    key={t.id}
                    task={t}
                    onToggle={toggleComplete}
                    onEdit={setEditing}
                    onDelete={deleteTask}
                  />
                ))}
              </AnimatePresence>
            </div>
          </>
        )}
      </motion.section>
    </section>
  );
}
