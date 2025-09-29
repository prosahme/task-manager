import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CompletedTasks from "./pages/CompletedTask.jsx";
import IncompletedTasks from "./pages/IncompletedTask.jsx";
import Header from "./components/Layout/Header.jsx";
import Footer from "./components/Layout/Footer.jsx";
import TaskApp from "./components/Task/TaskApp.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-white text-gray-800 font-sans">
        <div
          className="absolute top-0 left-0 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          aria-hidden="true"
        />

        <Header />

        <main className="relative z-10 pt-16 md:pt-20 pb-10 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TaskApp />} />
            <Route path="/completed" element={<CompletedTasks />} />
            <Route path="/incompleted" element={<IncompletedTasks />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
