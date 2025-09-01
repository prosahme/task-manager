import React from "react";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

export default function Header() {
  return (
    <header className="app-header">
      <div className="container header-inner">
        <motion.a
          className="brand"
          href="#"
          initial={{ y: -18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
        >
          <div className="brand-logo">TM</div>
          <div className="brand-title">My own task manager</div>
        </motion.a>

        <motion.div
          className="header-cta"
          initial={{ y: -18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.05,
            type: "spring",
            stiffness: 350,
            damping: 22,
          }}
        >
          <a className="link-muted" href="#how-it-works">
            How it works
          </a>
          <a
            className="btn"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub style={{ verticalAlign: "-2px", marginRight: 6 }} />
            GitHub
          </a>
        </motion.div>
      </div>
    </header>
  );
}
