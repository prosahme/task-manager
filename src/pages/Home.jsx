import React, { useState } from "react";
import TaskApp from "../components/Task/TaskApp";

export default function Home() {
  const [started, setStarted] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {!started ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Islamic Task Manager 🌙
          </h1>
          <p className="text-gray-600 mb-6 text-center max-w-md">
            Stay productive while being spiritually inspired. Manage your tasks
            and get daily Quranic quotes for motivation.
          </p>
          <button
            onClick={() => setStarted(true)}
            className="px-6 py-3 rounded-lg bg-gray-800 text-white font-medium text-lg hover:bg-gray-900 shadow-lg"
          >
            Get Started
          </button>
        </div>
      ) : (
        <div className="relative">
          <TaskApp showAddTask={true} />
        </div>
      )}
    </div>
  );
}
