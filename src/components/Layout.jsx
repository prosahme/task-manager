import React from "react";
import Navbar from "./Navbar.jsx";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-emerald-100">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
      <footer className="bg-green-700 text-white text-center py-4 mt-6">
        <p>© {new Date().getFullYear()} Islamic Task Manager ✨</p>
      </footer>
    </div>
  );
}
