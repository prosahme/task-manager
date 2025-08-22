import React from "react";
import { motion } from "framer-motion";
import TaskApp from "../components/Task/TaskApp";

export default function Home() {
  return (
    <main className="page">
      <div className="container">
        <section className="hero">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            Your day, organized.{" "}
            <span style={{ color: "var(--accent)" }}>Beautifully.</span>
          </motion.h1>
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.35 }}
          >
            Add tasks, set priorities and due dates, track progress, and
            celebrate wins with delightful micro-animations.
          </motion.p>
        </section>

        <TaskApp />
      </div>
    </main>
  );
}
