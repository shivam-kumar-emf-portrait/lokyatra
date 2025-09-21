import React from "react";

const BusCard = ({ bus }) => (
  <div className="bus-card card">
    <h3>{bus.routeName}</h3>
    <div style={{ fontSize: "1.05rem", marginTop: "4px" }}>
      <p><strong>From:</strong> {bus.from}</p>
      <p><strong>To:</strong> {bus.to}</p>
      <p><strong>Arrival Time:</strong> {bus.arrivalTime}</p>
      <p><strong>Fare:</strong> ₹{bus.fare}</p>
      <p><strong>Type:</strong> {bus.isAC ? "AC" : "Non-AC"}</p>
    </div>
  </div>
);

export default BusCard;
