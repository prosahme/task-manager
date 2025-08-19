import React from "react";

import TaskApp from "../components/Task/TaskApp";

export default function Home() {
  return (
    <div className="page-container">
      <main className="content">
        <TaskApp />
      </main>
    </div>
  );
}
