import React from "react";
import './App.css';

import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import TrackBus from "./pages/TrackBus";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Emergency from "./pages/Emergency";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function Dashboard() {
  return (
    <div className="card">
      <h2>Dashboard</h2>
      {/* Dashboard content */}
    </div>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/track" element={<TrackBus />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}
