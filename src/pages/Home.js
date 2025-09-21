import React, { useState } from "react";
import BusCard from "../components/BusCard";
import MapComponent from "../components/MapComponent";

const sampleBuses = [
  { routeName: "City1 to City2", from: "City1", to: "City2", location: [28.6304, 77.2177], fare: 30, isAC: true },
  { routeName: "TownA to TownB", from: "TownA", to: "TownB", location: [28.6294, 77.2197], fare: 15, isAC: false },
  { routeName: "City3 to City4", from: "City3", to: "City4", location: [28.6354, 77.2207], fare: 45, isAC: true },
];

const Home = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState("");
  const [maxFare, setMaxFare] = useState("");

  // Flip From and To
  const handleFlip = () => {
    setFrom(prevFrom => {
      setTo(prevTo => prevFrom);
      return to;
    });
  };

  // Filter logic
  const filteredBuses = sampleBuses.filter(bus =>
    (from === "" || bus.from.toLowerCase().includes(from.toLowerCase())) &&
    (to === "" || bus.to.toLowerCase().includes(to.toLowerCase())) &&
    (category === "" || (category === "AC" ? bus.isAC : !bus.isAC)) &&
    (maxFare === "" || bus.fare <= parseInt(maxFare))
  );

  const mapMarkers = showResults ? filteredBuses : [];

  return (
    <div className="home-main-shell">
      <div className="branding-row">
        <h1 className="home-title">NEXTBUS - Find Your Journey</h1>
      </div>

      <div className="search-bar-main">
        <input
          value={from}
          onChange={e => setFrom(e.target.value)}
          placeholder="From Bus Stop"
          className="main-stop-input"
        />
        <button className="swap-btn" onClick={handleFlip} title="Flip Stops">&#8646;</button>
        <input
          value={to}
          onChange={e => setTo(e.target.value)}
          placeholder="To Destination"
          className="main-stop-input"
        />
        <button className="find-btn" onClick={() => setShowResults(true)}>
          Find Nearest Bus
        </button>
      </div>

      <div className="main-content-row">
        <div className="left-content">
          <div className="bus-map-section card">
            <div className="section-label">Map</div>
            <MapComponent busMarkers={mapMarkers} />
          </div>
        </div>

        <div className="right-content">
          <div className="bus-results-section card">
            <div className="results-header-row" style={{ position: "relative" }}>
              <div className="section-label">Available Buses</div>
              <button
                className="filter-btn"
                title="Filter"
                onClick={() => setShowFilter(v => !v)}
              >
                &#9776;
              </button>
              {showFilter && (
                <div
                  className="filter-popup"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "0%",
                    zIndex: 999,
                    minWidth: 210,
                    maxWidth: 260,
                    boxSizing: "border-box",
                  }}
                >
                  {/* Cross (close) button */}
                  <button
                    style={{
                      position: "absolute",
                      right: 8,
                      top: 6,
                      background: "none",
                      border: "none",
                      fontSize: 20,
                      color: "#622e5d",
                      cursor: "pointer",
                      padding: 0
                    }}
                    aria-label="Close filter"
                    onClick={() => setShowFilter(false)}
                    tabIndex={0}
                  >
                    &times;
                  </button>
                  <div style={{ marginBottom: "10px", fontWeight: 'bold' }}>Filters</div>
                  <label>
                    <input
                      type="radio"
                      value=""
                      checked={category === ""}
                      onChange={e => setCategory(e.target.value)}
                    /> All
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="AC"
                      checked={category === "AC"}
                      onChange={e => setCategory(e.target.value)}
                    /> AC
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="NOAC"
                      checked={category === "NOAC"}
                      onChange={e => setCategory(e.target.value)}
                    /> Non-AC
                  </label>
                  <label style={{ marginTop: "10px", display: "block" }}>
                    Max Fare (₹):&nbsp;
                    <input
                      type="number"
                      value={maxFare}
                      onChange={e => setMaxFare(e.target.value)}
                      className="small-fare-input"
                      min={0}
                      style={{ width: 80 }}
                    />
                  </label>
                </div>
              )}
            </div>
            <div className="bus-list">
              {!showResults ? (
                <div style={{ padding: "1.1rem", textAlign: "center", opacity: 0.8 }}>
                  Enter bus stops and press Find!
                </div>
              ) : filteredBuses.length === 0 ? (
                <div style={{ padding: "1.1rem", textAlign: "center", opacity: 0.8 }}>
                  No buses found.
                </div>
              ) : (
                filteredBuses.map((bus, idx) => <BusCard key={idx} bus={bus} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
