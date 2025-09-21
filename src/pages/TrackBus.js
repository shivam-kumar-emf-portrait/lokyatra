import React, { useState } from "react";
import MapComponent from "../components/MapComponent";

const TrackBus = () => {
  const [busNumber, setBusNumber] = useState("");
  const [info, setInfo] = useState("");

  const handleTrack = () => {
    if (!busNumber.trim()) {
      setInfo("Please enter a valid bus number.");
      return;
    }
    setInfo(`Tracking details and location for bus #${busNumber} will be shown below.`);
  };

  return (
    <section className="trackbus-section" style={{ display: "flex", justifyContent: "center", minHeight: "100vh" }}>
      <div className="card trackbus-card">
        <h1 className="trackbus-title">Track Bus & Live Map</h1>
        <div className="trackbus-form">
          <input 
            type="text" 
            value={busNumber} 
            onChange={(e) => setBusNumber(e.target.value)} 
            placeholder="Enter Bus Number"
            className="input-field big-input"
          />
          <button 
            onClick={handleTrack}
            className="trackbus-btn"
          >
            Track
          </button>
        </div>
        {info && <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{info}</p>}
        <div className="card trackbus-map-card">
          <div className="premium-map map-popout" style={{ marginTop: "10px" }}>
            <MapComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackBus;
