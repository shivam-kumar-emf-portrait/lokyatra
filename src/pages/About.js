import React from "react";
import { FaBus, FaClock, FaLeaf, FaUsers } from "react-icons/fa";

const About = () => (
  <section className="about-page card">
    <div className="about-header">
      <h2>About NextBus</h2>
      <p className="subtitle">
        Smart, reliable, and eco-friendly public transport for everyone 
      </p>
    </div>

    <div className="about-content">
      <p>
        <strong>NextBus</strong> is a next-generation, real-time public transport tracking system designed to make your commute easier, safer, and eco-friendlier.
      </p>
      <p>Additional details about features, benefits, and innovations can be added here.</p>
    </div>

    <div className="features-grid">
      <div className="feature-card card">
        <FaBus className="feature-icon" />
        <h3>Live Bus Tracking</h3>
        <p>Know exactly where your bus is, in real-time.</p>
      </div>
      <div className="feature-card card">
        <FaClock className="feature-icon" />
        <h3>Smart Predictions</h3>
        <p>Accurate arrival time updates to reduce waiting.</p>
      </div>
      <div className="feature-card card">
        <FaUsers className="feature-icon" />
        <h3>Better Commute</h3>
        <p>Improved safety, comfort, and accessibility for everyone.</p>
      </div>
      <div className="feature-card card">
        <FaLeaf className="feature-icon" />
        <h3>Eco-Friendly</h3>
        <p>Encourages public transport usage for a greener tomorrow.</p>
      </div>
    </div>
  </section>
);

export default About;
