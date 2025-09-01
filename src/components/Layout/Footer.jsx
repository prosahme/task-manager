import React from "react";

export default function Footer() {
  return (
    <footer className="app-footer">
      <div
        className="container row"
        style={{ justifyContent: "space-between" }}
      >
        <span>© {new Date().getFullYear()} My task manager</span>
        <span>Built your own task manager</span>
      </div>
    </footer>
  );
}
