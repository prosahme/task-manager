import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (path) =>
    `hover:text-green-600 transition-colors duration-200 ${
      location.pathname === path ? "text-green-600 font-bold" : "text-gray-600"
    }`;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/tasks", label: "Tasks" },
    { path: "/completed", label: "Completed" },
    { path: "/incompleted", label: "Incompleted" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        <motion.div
          className="flex items-center space-x-3"
          initial={{ y: -18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
        >
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-green-600 font-bold text-xl rounded-full w-10 h-10 flex items-center justify-center bg-green-100">
              TM
            </div>
            <div className="text-gray-800 font-semibold text-lg">
              My own task manager
            </div>
          </Link>
        </motion.div>

        <motion.nav
          className="hidden md:flex items-center space-x-4"
          initial={{ y: -18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.05,
            type: "spring",
            stiffness: 350,
            damping: 22,
          }}
        >
          {navLinks.map(({ path, label }) => (
            <Link key={path} to={path} className={linkClass(path)}>
              {label}
            </Link>
          ))}

          <a
            className="flex items-center bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition-colors duration-200"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub className="mr-1" />
            GitHub
          </a>
        </motion.nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-md shadow-md flex flex-col space-y-4 px-6 py-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={linkClass(path)}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}

            <a
              className="flex items-center bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition-colors duration-200"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <FiGithub className="mr-1" />
              GitHub
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
