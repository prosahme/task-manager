import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-green-700 text-white py-4 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 space-y-2 md:space-y-0">
        <span className="text-sm">
          © {new Date().getFullYear()} My Task Manager
        </span>
        <span className="text-sm">Built your own task manager</span>
      </div>
    </footer>
  );
}
