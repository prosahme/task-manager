import React from "react";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const linkClass = (path) =>
    `hover:text-green-600 transition-colors duration-200 ${
      location.pathname === path ? "text-green-600 font-bold" : "text-gray-600"
    }`;

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        <motion.a
          className="flex items-center space-x-3"
          href="#"
          initial={{ y: -18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
        >
          <div className="text-green-600 font-bold text-xl rounded-full w-10 h-10 flex items-center justify-center bg-green-100">
            TM
          </div>
          <div className="text-gray-800 font-semibold text-lg">
            My own task manager
          </div>
        </motion.a>

        <motion.div
          className="flex items-center space-x-4"
          initial={{ y: -18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.05,
            type: "spring",
            stiffness: 350,
            damping: 22,
          }}
        >
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/tasks" className={linkClass("/tasks")}>
            Tasks
          </Link>
          <Link to="/completed" className={linkClass("/completed")}>
            Completed
          </Link>
          <Link to="/incompleted" className={linkClass("/incompleted")}>
            Incompleted
          </Link>

          <a
            className="flex items-center bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition-colors duration-200"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub className="mr-1" />
            GitHub
          </a>
        </motion.div>
      </div>
    </header>
  );
}
