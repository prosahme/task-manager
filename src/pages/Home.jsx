import React, { useState } from "react";
import { motion } from "framer-motion";
import TaskApp from "../components/Task/TaskApp";
import { Book, Star, CheckCircle } from "lucide-react";

export default function Home() {
  const [started, setStarted] = useState(false);

  const features = [
    {
      icon: <Book className="w-8 h-8 text-indigo-600" />,
      title: "Daily Quranic Inspiration",
      desc: "Start your day with powerful Quranic quotes.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "Stay Organized",
      desc: "Track your daily goals and spiritual duties easily.",
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Be Consistent",
      desc: "Get rewarded for completing small daily tasks.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6">
      {!started ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* Title */}
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to{" "}
            <span className="text-indigo-600">Islamic Task Manager 🌙</span>
          </motion.h1>

          <motion.p
            className="text-gray-600 mb-10 text-center max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Stay productive while being spiritually inspired. Manage your tasks
            and get daily Quranic quotes for motivation.
          </motion.p>

          {/* Feature Grid like Pinterest cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.2, duration: 0.5 }}
              >
                {f.icon}
                <h3 className="mt-4 font-semibold text-lg text-gray-800">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={() => setStarted(true)}
            className="px-8 py-3 rounded-full bg-indigo-600 text-white font-medium text-lg hover:bg-indigo-700 shadow-lg transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      ) : (
        <div className="relative">
          <TaskApp showAddTask={true} />
        </div>
      )}
    </div>
  );
}
