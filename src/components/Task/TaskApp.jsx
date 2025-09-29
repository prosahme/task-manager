import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TaskForm from "./TaskForm.jsx";
import TaskCard from "./TaskCard.jsx";
import useLocalStorage from "../../hooks/useLocalStorage.js";
import useFetch from "../../hooks/useFetch.js";

const LS_KEY = "tm_tasks_v1";

export default function TaskApp({ filter = "all" }) {
  const [tasks, setTasks] = useLocalStorage(LS_KEY, []);
  const [editing, setEditing] = useState(null);

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
        id: (crypto?.randomUUID && crypto.randomUUID()) || String(Date.now()),
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
      if (aHas && bHas) return new Date(a.dueDate) - new Date(b.dueDate);
      if (aHas) return -1;
      if (bHas) return 1;
      return b.updatedAt - a.updatedAt;
    });
    return copy;
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    if (filter === "completed") return sortedTasks.filter((t) => t.completed);
    if (filter === "incompleted")
      return sortedTasks.filter((t) => !t.completed);
    return sortedTasks;
  }, [sortedTasks, filter]);

  const total = filteredTasks.length;
  const done = filteredTasks.filter((t) => t.completed).length;
  const allDone = total > 0 && done === total;

  const {
    data: quoteData,
    loading: quoteLoading,
    error: quoteError,
    refetch: refetchQuote,
  } = useFetch("https://api.alquran.cloud/v1/ayah/random");

  return (
    <section className="grid gap-6 md:grid-cols-3">
      <motion.aside
        className="bg-white shadow-lg rounded-xl p-4 md:col-span-1"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <h3 className="text-lg font-semibold mb-2">
          {editing ? "Edit Task" : "Create Task"}
        </h3>
        <TaskForm
          onSave={upsertTask}
          editingTask={editing}
          onCancel={() => setEditing(null)}
        />
      </motion.aside>
      <motion.section
        className="bg-white shadow-lg rounded-xl p-4 md:col-span-2 flex flex-col"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.25 }}
      >
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
          <h3 className="text-lg font-semibold">Tasks</h3>
          <span className="text-sm text-gray-500">
            {total} total • {done} done
          </span>
        </div>
        <hr className="mb-4" />

        {total === 0 ? (
          <div className="text-center py-10 text-gray-400">
            <h4 className="text-lg font-medium">No tasks yet</h4>

            <p>Start by adding your first task and make today count ✨</p>
          </div>
        ) : (
          <>
            {allDone && (
              <motion.div
                className="mb-3 text-green-700 font-semibold text-center"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
              >
                🎉 Keep up the good work! All tasks complete.
              </motion.div>
            )}
            <div className="space-y-3 overflow-y-auto max-h-[60vh] pr-2">
              <AnimatePresence initial={false}>
                {filteredTasks.map((t) => (
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

      <motion.aside
        className="bg-green-50 shadow-lg rounded-xl p-4 md:col-span-3 mt-4 md:mt-0"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.25 }}
      >
        <h3 className="text-lg font-semibold mb-2 text-green-800">
          Quran Inspiration
        </h3>
        <hr className="mb-2" />
        {quoteLoading ? (
          <div className="text-center py-4">Loading...</div>
        ) : quoteError ? (
          <div className="text-center py-4">
            <p>Couldn’t fetch ayah 😢</p>
            <button
              className="mt-2 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 focus:ring-2 focus:ring-green-400 transition"
              onClick={refetchQuote}
            >
              Retry
            </button>
          </div>
        ) : (
          <blockquote className="text-gray-700 italic">
            {quoteData?.data?.text || "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"}
            <cite className="block mt-2 text-sm text-gray-500">
              — {quoteData?.data?.surah?.englishName}, Ayah{" "}
              {quoteData?.data?.numberInSurah}
            </cite>
          </blockquote>
        )}
      </motion.aside>
    </section>
  );
}
