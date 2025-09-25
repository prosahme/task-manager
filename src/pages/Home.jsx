import React from "react";
import { motion } from "framer-motion";
import TaskApp from "../components/Task/TaskApp";

export default function Home({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-emerald-100 to-green-200 p-6">
      <h1 className="text-4xl font-bold text-green-700 mb-4">
        Welcome to Islamic Task Manager 🌙
      </h1>
      <p className="text-gray-700 mb-6 text-center max-w-md">
        Stay productive while being spiritually inspired. Manage your tasks and
        get daily Quranic quotes for motivation.
      </p>
      <button
        onClick={onStart}
        className="px-6 py-3 rounded-lg bg-green-600 text-white font-medium text-lg hover:bg-green-700 shadow-lg"
      >
        Get Started
      </button>
      <TaskApp />
    </div>
  );
}
