import React, { useState } from "react";

const AddBus = ({ onSubmit }) => {
  const [busNumber, setBusNumber] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [busType, setBusType] = useState("public");
  const [startPoint, setStartPoint] = useState("");
  const [intermediateRoutes, setIntermediateRoutes] = useState([""]);
  const [lastDestination, setLastDestination] = useState("");

  const handleIntermediateChange = (i, value) => {
    const routes = [...intermediateRoutes];
    routes[i] = value;
    setIntermediateRoutes(routes);
  };

  const addIntermediateRoute = () => setIntermediateRoutes([...intermediateRoutes, ""]);

  const removeIntermediateRoute = (i) => {
    const routes = [...intermediateRoutes];
    routes.splice(i, 1);
    setIntermediateRoutes(routes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({
        busNumber,
        ownerName,
        busType,
        startPoint,
        intermediateRoutes: intermediateRoutes.filter(r => r.trim()),
        lastDestination,
      });
    }
    // Clear form or additional logic can go here
  };

  return (
    <div className="add-bus-container">
      <form className="add-bus-form" onSubmit={handleSubmit}>
        <label>
          Bus Number
          <input
            type="text"
            value={busNumber}
            onChange={(e) => setBusNumber(e.target.value)}
            required
            placeholder="Enter Bus Number"
          />
        </label>
        <label>
          Registered Owner Name
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            required
          />
        </label>
        <label>
          Bus Type
          <select value={busType} onChange={(e) => setBusType(e.target.value)}>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </label>
        <label>
          Starting Point of Route
          <input
            type="text"
            value={startPoint}
            onChange={(e) => setStartPoint(e.target.value)}
            required
          />
        </label>
        <label>
          Intermediate Routes
          {intermediateRoutes.map((route, i) => (
            <div className="route-row" key={i}>
              <input
                type="text"
                value={route}
                onChange={(e) => handleIntermediateChange(i, e.target.value)}
                placeholder={`Stop ${i + 1}`}
              />
              {intermediateRoutes.length > 1 && (
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeIntermediateRoute(i)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="add-route-btn"
            onClick={addIntermediateRoute}
          >
            Add Route
          </button>
        </label>
        <label>
          Last Destination
          <input
            type="text"
            value={lastDestination}
            onChange={(e) => setLastDestination(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="submit-btn">
          Add Bus
        </button>
      </form>
    </div>
  );
};

export default AddBus;
