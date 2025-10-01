import React from "react";

export default function IncompletedTasks() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white shadow-md rounded-xl p-6 max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-800">
            Incompleted Tasks
          </h1>
          <p className="mt-2 text-gray-600">
            All your incompleted tasks will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}
