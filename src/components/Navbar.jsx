import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for hamburger icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    "px-3 py-2 rounded-md text-sm font-medium transition hover:bg-green-600 hover:text-white";

  return (
    <nav className="bg-green-700 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <h1 className="font-bold text-lg">🌙 Islamic Task Manager</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-green-800 px-4 py-3 space-y-2">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${linkClass} block ${isActive ? "bg-white text-green-700" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/tasks"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${linkClass} block ${isActive ? "bg-white text-green-700" : ""}`
            }
          >
            Tasks
          </NavLink>
          <NavLink
            to="/completed"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${linkClass} block ${isActive ? "bg-white text-green-700" : ""}`
            }
          >
            Completed
          </NavLink>
          <NavLink
            to="/incompleted"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${linkClass} block ${isActive ? "bg-white text-green-700" : ""}`
            }
          >
            Incompleted
          </NavLink>
        </div>
      )}
    </nav>
  );
}
