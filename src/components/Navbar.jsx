import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass =
    "px-3 py-2 rounded-md text-sm font-medium transition hover:bg-green-600 hover:text-white";

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="font-bold text-lg">🌙 Islamic Task Manager</h1>
        <div className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? "bg-white text-green-700" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? "bg-white text-green-700" : ""}`
            }
          >
            Tasks
          </NavLink>
          <NavLink
            to="/completed"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? "bg-white text-green-700" : ""}`
            }
          >
            Completed
          </NavLink>
          <NavLink
            to="/incompleted"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? "bg-white text-green-700" : ""}`
            }
          >
            Incompleted
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
