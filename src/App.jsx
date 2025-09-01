import React from "react";
import Home from "./pages/Home.jsx";
import Header from "./components/Layout/Header.jsx";
import Footer from "./components/Layout/Footer.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="app-shell">
      <div className="bg-orb orb-1" aria-hidden="true" />
      <div className="bg-orb orb-2" aria-hidden="true" />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
